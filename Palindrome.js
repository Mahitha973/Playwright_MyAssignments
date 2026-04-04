let str = "madam";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed = reversed + str[i];
}
console.log("Reversed String: " + reversed);
if (str === reversed) {
    console.log(true);
} else {
    console.log(false);
}
