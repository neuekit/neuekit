export const S = (selector, container = document) => {

    return container.querySelector(selector);
};

export const SA = (selector, container = document) => {

    return container.querySelectorAll(selector);
};

export const CN = (classname, container = document) => {

    return container.getElementsByClassName(classname);
};

export const ID = (id, container = document) => {

    return container.getElementById(id);
};

export const TN = (tag, container = document) => {

    return container.getElementsByTagName(tag);
};