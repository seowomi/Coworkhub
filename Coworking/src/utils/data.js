export function checkData(data) {
    for (let val in data) {
        if (data[val].trim().length === 0) {
            return false;
        }
    }
    return true;
}

export function checkEditData(data) {
    for (let val in data) {
        // console.log(data[val])
        if (data[val] === null || typeof(data[val]) !== "string") continue;
        if (data[val].trim().length === 0 && val !== 'picture') {
            return false;
        }
    }
    return !!parseFloat(data.price);
}