module.exports = {
    root: true,
    env: {browser: true, es2020: true},
    extends: [
        'eslint:recommended',
        'airbnb-base',
        'plugin:@typescript-eslint/recommended',
        "plugin:import/recommended",
        "plugin:import/typescript",
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh', 'import'],
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: true,
            typescript: {
                project: '.',
            },
        },
    },
    rules: {
        'import/no-extraneous-dependencies': ['off'],
        'import/no-unresolved': 'error',
        'import/prefer-default-export': 'off',
        'react-hooks/exhaustive-deps': 'off',
        'import/extensions': 'off',
        'import/no-absolute-path': 'off',
        'consistent-return': 'off',
        'no-use-before-define': 'off',
        'no-underscore-dangle': 'off',
        'import/order': [
            'error',
            {
                groups: [
                    'builtin',
                    'external',
                    'internal',
                    'parent',
                    'sibling',
                    'index',
                    'object',
                    'type',
                ],
                'newlines-between': 'always',
            },
        ],
        'react-refresh/only-export-components': [
            'warn',
            {allowConstantExport: true},
        ],
        'no-shadow': ['off'],
        'arrow-body-style': ['off'],
        '@typescript-eslint/no-explicit-any': 'off',
        'no-nested-ternary': 'off',
        'dot-notation': 'off',
        'default-param-last': 'off',
        '@typescript-eslint/no-unused-vars': ['warn'],
        'no-template-curly-in-string': 'off',
        'no-unused-expressions': 'off',
        'no-param-reassign': 'off',
        'import/no-cycle': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'warn',
        'no-restricted-syntax': 'off'
    },
};
