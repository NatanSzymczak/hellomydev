module.exports = {
    globals: {
        __PATH_PREFIX__: true,
    },
    extends: ['react-app', 'airbnb', 'prettier'],
    rules: {
        'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'react/function-component-definition': [
            2,
            {
                namedComponents: ['arrow-function', 'function-declaration'],
                unnamedComponents: 'arrow-function',
            },
        ],
    },
};
