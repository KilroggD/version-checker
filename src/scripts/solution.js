export const Solution = (version1, version2) => {
    // split string and cast to numbers
    const list1 = version1.split('.').map(Number);
    const list2 = version2.split('.').map(Number);

    // fill difference with zeros
    if (list1.length > list2.length) {
        list2.push(...(new Array(list1.length - list2.length).fill(0)));
    } else if (list2.length > list1.length) {
        list1.push(...(new Array(list2.length - list1.length).fill(0)));
    }

    for(let i = 0; i < list1.length; i++) {
        if (list1[i] > list2[i]) {
            return 1;
        }
        if (list1[i] < list2[i]) {
            return -1;
        }        
    }
    return 0;
};
