# MyApp UI Lib ( React )

Personal UI Component Library for React.

## Quick Start

```tsx
yarn add git+https://github.com/BlaxBerry/myapp_uilib_react
```

## Tech Stacks

- [React]() v18
- [Vite]() v5
- [TypeScript]() v5
- [Storybook]() v7
- [MUI]() v5

## Project Structure

```
/
├── .storybook/
├── .dist/
├── docs/                           project's documents
├── public/
├── src/                            components
│   ├── [...]/
│   ├── ...
│   └── index.ts
├── stories/                        components' stories
│   ├── [...]/
│   │   ├── [...].mdx
│   │   └── [...].stories.tsx
│   └── ...
├── storybook-static                storybook static pages
│   ├── ...
│   └── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── ...
```

## Dev Commands

```shell
yarn dev:storybook      # start storybook dev server at :6006

yarn build:lib          # build this repo
yarn build:storybook    # only build storybook static html
yarn build:types        # only build types

yarn check-eslint       # check eslint rules
yarn check-prettier     # check prettier rules

yarn format             # format code
```

## Dev Flow

```shell
yarn build:lib
git commit -m "MESSAGE"
git push
```

## Documents

- [Change Log](./docs/changeLog.md)

http://demo.eui6.com/#/form/button.html
