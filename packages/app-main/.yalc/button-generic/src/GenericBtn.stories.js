import GenericBtn from './GenericBtn.vue'

export default {
    title: 'Components/GenericBtn',
    component: GenericBtn,
}

export const Primary = () => ({
    components: { GenericBtn },
    template: '<GenericBtn>Primary Test</GenericBtn>',
  });
  export const Secondary = () => ({
    components: { GenericBtn },
    template: '<GenericBtn>Secondary Test</GenericBtn>',
  });