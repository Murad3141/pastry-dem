import React from 'react';
import * as jsxRuntime from 'react/jsx-runtime';
import * as jsxDevRuntime from 'react/jsx-dev-runtime';

/**
 * RuntimePatch.js
 * 
 * This script addresses legacy WordPress integration issues in React:
 * 1. Mocks missing global variables like 'complianz' and 'jQuery' to prevent ReferenceErrors.
 * 2. Patches the React JSX transform (jsx, jsxs) to automatically convert 
 *    HTML-style "style" strings into React-compatible style objects at runtime.
 */

if (typeof window !== 'undefined') {
    // 1. Prevent 'complianz is not defined' ReferenceErrors
    window.complianz = window.complianz || {
        init: () => { },
        accept: () => { },
        deny: () => { },
        revoke: () => { },
        getCookie: () => '',
        setCookie: () => { },
        categories: {},
        region: 'eu',
        endpoint: '',
        version: '1.0.0'
    };

    // Provide initial mock for jQuery/plugins that might load later
    window.jQuery = window.jQuery || function () { return { on: () => { }, off: () => { } }; };
    window.$ = window.$ || window.jQuery;
}

/**
 * Helper to convert CSS style string to React style object
 */
const parseStyleString = (styleString) => {
    if (typeof styleString !== 'string') return styleString;
    if (!styleString.trim()) return {};

    return styleString.split(';').reduce((acc, style) => {
        const firstColonIndex = style.indexOf(':');
        if (firstColonIndex === -1) return acc;

        const rawKey = style.slice(0, firstColonIndex).trim();
        const value = style.slice(firstColonIndex + 1).trim();

        if (rawKey && value) {
            // Convert kebab-case (background-color) to camelCase (backgroundColor)
            let key = rawKey.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

            // Special case for 'float' which is a reserved word in JS but valid in CSS
            if (key === 'float') key = 'cssFloat';

            acc[key] = value;
        }
        return acc;
    }, {});
};

/**
 * Higher-order function to wrap JSX creators
 */
const wrapJSXCreator = (original) => {
    if (!original) return original;
    return function (type, props, ...rest) {
        if (props && typeof props.style === 'string') {
            props = { ...props, style: parseStyleString(props.style) };
        }
        return original.apply(this, [type, props, ...rest]);
    };
};

// 2. Patch both production and development JSX runtimes
if (jsxRuntime) {
    jsxRuntime.jsx = wrapJSXCreator(jsxRuntime.jsx);
    jsxRuntime.jsxs = wrapJSXCreator(jsxRuntime.jsxs);
}

if (jsxDevRuntime) {
    jsxDevRuntime.jsxDEV = wrapJSXCreator(jsxDevRuntime.jsxDEV);
}

// 3. Keep fallback for legacy React.createElement (if used)
const originalCreateElement = React.createElement;
React.createElement = function (type, props, ...children) {
    if (props && typeof props.style === 'string') {
        props = { ...props, style: parseStyleString(props.style) };
    }
    return originalCreateElement.apply(this, [type, props, ...children]);
};

console.log('✅ Runtime Patch Injected: Style-strings and globals fixed for React 18.');
