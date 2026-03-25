# React Native + Expo Course

Table of Contents:

1. Introduction
2. Creating React Native Project

## Setup

## Installation

```bash
npx create-expo-app --template blank RNCourse -> this will create a new React Native project named RNCourse
```

- React Native uses these things compared to Web React:

1. View instead of div: view is like a div but it doesn't have any default styling, by default it's `flexbox`

2. StyleSheet instead of CSS: StyleSheet is like CSS but it's JavaScript
3. Text instead of p: Text is like a p tag but it doesn't have any default styling
4. Button instead of button: Button is like a button tag but it doesn't have any default styling
5. TextInput instead of input: TextInput is like an input tag but it doesn't have any default styling

6. ScrollView is a generic scrolling container used to provide a scrollable view to its child components.

7. FlatList is a performant interface for rendering simple, flat lists, supporting features like item separators, header/footer support, and pull-to-refresh. It will only render the items that are currently visible on the screen, which makes it more efficient than ScrollView for large lists.
