export function filterNames(names, startsWith) {
    return names.filter(name => name.startsWith(startsWith));
}

export function objectFilter(objects, key, searchString) {
    return objects.filter(object => object[key] === searchString);
}

export function compoundObjectFilter(objects, keysString, searchString) {
    return objects.filter(object => object[keysString.split('.')[0]][keysString.split('.')[1]] === searchString);
}
