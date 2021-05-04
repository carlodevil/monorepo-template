import TestComponent from './TestComponent.vue'

export default {
    title: 'test/TestComponent',
    component: TestComponent,
}

export const Primary = () => ({
    components: { TestComponent },
    template: '<TestComponent>Welcome to your Storybook Vue 3 UI library!</TestComponent>',
  });
  export const Secondary = () => ({
    components: { TestComponent },
    template: '<TestComponent>Feel free to request features and leave comments.</TestComponent>',
  });