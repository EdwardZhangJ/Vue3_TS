
// timestamp4 = new Date(1654585142 * 1000)

const { log } = require("console");

// console.log(timestamp4);
// console.log(timestamp4.toLocaleDateString().replace(/\//g, "-") + " " + timestamp4.toTimeString().substr(0, 8))


// timeStamp = new Date(1654596620 * 1000)

// console.log(timeStamp);
// console.log(timeStamp.toLocaleDateString().replace(/\//g, "-") + " " + timeStamp.toTimeString().substring(0, 8))

var str = '{"result":{"resultCode":"000000","resultMessage":"成功!"},"data":{"fileSaveName":"applet/im/ufEp4XrnyYgf4181f50ed80905aed98ad2c8a339800a1535216359552581632.png","chunks":null,"fileUrl":"http://192.168.3.210:8380/file-service/file/view/applet/im/ufEp4XrnyYgf4181f50ed80905aed98ad2c8a339800a1535216359552581632.png"}})';

// str.slice(0,str.length-1)

// console.log(str)



// console.log(str)

var arr = [{ id: 0, name: '张三', phone: '13231242525', checked: false },
{ id: 1, name: '张三4', phone: '13231242525', checked: true },
{ id: 2, name: '张三而', phone: '13231242525', checked: false },]

var newArr = arr.map( item => {
  if(item.checked) {
    return {
      sjh: item.phone,
      lxrXm: item.name
    }
  } else {
    return
  }
})
console.log(newArr);

let newArr2 = []
arr.forEach(item => {
  if(item.checked) {
    let lst = {
      sjh: item.phone,
      lxrXm: item.name
    }
    newArr2.push(lst)
  }
});

console.log(newArr2);
console.log()
var obj = require('./test.json')
obj.data.zm.forEach( item => {
  console.log(JSON.parse(item.wzxx));
})
