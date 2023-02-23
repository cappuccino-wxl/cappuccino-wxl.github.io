let myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

// let iceCream = 'chocolate';
// if (iceCream === 'chocolate') {
//     alert('我最喜欢巧克力冰激淋了。');
// } else {
//     alert('但是巧克力才是我的最爱呀……');
// }


// // 定义函数
// function multiply(num1, num2) {
//     let result = num1 * num2;
//     return result;
// }

// multiply(4, 7);
// multiply(20, 20);
// multiply(0.5, 3);

// document.querySelector("h1").addEventListener("click", function () {
//     alert("点到的人都会有好运哦！");
// });

// document.querySelector('p').addEventListener('click', () => {
//     alert('别戳我，我怕疼。');
// });

// // 切换图片
// let myImage = document.querySelector('img'); // 把 <img> 元素的引用存放在 myImage 变量里
// myImage.onclick = function () { // 将这个变量的 onclick 事件与一个匿名函数绑定
//     // 每次点击图片时
//     let mySrc = myImage.getAttribute('src'); // 获取这张图片的 src 属性值
//     // 用一个条件句来判断 src 的值是否等于原始图像的路径
//     if (mySrc === 'images/微信图片_20220724093850.jpg') { // 如果是，则将 src 的值改为第二张图片的路径，并在 <img> 内加载该图片
//         myImage.setAttribute('src', 'images/微信图片_20220725205628.jpg');
//     } else { // 如果不是（意味着它已经修改过）, 则把 src 的值重新设置为原始图片的路径，即原始状态
//         myImage.setAttribute('src', 'images/微信图片_20220724093850.jpg');
//     }
// }

// 添加个性化欢迎消息
let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');

// function setUserName() {
//     let myName = prompt('请输入你的名字。'); // 调用 prompt() 函数，与 alert() 类似会弹出一个对话框, 需要用户输入数据，并在确定后将数据存储在 myName 变量里
//     localStorage.setItem('name', myName); // 调用 localStorage API，它可以将数据存储在浏览器中供后续获取, 这里用 localStorage 的 setItem() 函数来创建一个'name' 数据项，并把 myName 变量复制给它
//     myHeading.textContent = 'Mozilla 酷毙了，' + myName; // 将 textContent 属性设置为一个欢迎字符串加上这个新设置的名字
// }

// 设置强制输入名字
function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if (!localStorage.getItem('name')) { // 检测 'name' 数据是否存在
    setUserName(); // 不存在，调用 setUserName() 创建
} else { // 存在，调用 getItem() 获取保存的名字，像上文的 setUserName() 那样设置 textContent
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}

myButton.onclick = function () {
    setUserName();
}


