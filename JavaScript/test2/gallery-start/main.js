var displayedImage = document.querySelector('.displayed-img');
var thumbBar = document.querySelector('.thumb-bar');

btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');

/* 遍历图片并添加至缩略图区 */
for (var i = 1; i < 6; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  newImage.onclick = function (e) {
    var imageSource = e.target.getAttribute('src');
    function showImage(img) {
      displayedImage.setAttribute('src', img)
    }
    showImage(imageSource);
  }
  thumbBar.appendChild(newImage);
}
/* 编写 变亮/变暗 按钮 */
btn.onclick = function (e) {
  var buttonName = e.target.getAttribute('class');
  if (buttonName === 'dark') {
    e.target.setAttribute('class', 'light');
    e.target.textContent = '变亮';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)'
  } else {
    e.target.setAttribute('class', 'dark');
    e.target.textContent = '变暗';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)'
  }
}
