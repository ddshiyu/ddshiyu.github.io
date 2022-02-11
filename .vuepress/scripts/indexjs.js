const tags = document.getElementsByTagName('a');
Array.from(tags).forEach(v => {
  v.target = '_blank';
})