export const hasProp = (instance, prop) => {
    const $options = instance.$options || {};
    const propsData = $options.propsData || {};
    return prop in propsData;
};
