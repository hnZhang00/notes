(function() {
  var templateMatch = {
    evaluate: /<%([\s\S]+?)%>/g,
    interpolate: /<%=([\s\S]+?)%>/g,
  };
  var noMath = /(.)^/;

  var escapes = {
    "'": "'",
    "\\": "\\",
    "\r": "r", // 回车
    "\n": "n", // 换行
    "\u2028": "u2028", // 行分隔符，会被浏览器解析为换行
    "\u2029": "u2029", // 段落分隔符
  };
  var escapesMatch = /\\|'|\r|\n|\u2028|\u2029/g;
  var escapeReplace = function(match) {
    return '\\' + escapes[match];
  }

  function template(text) {
    var matcher = new RegExp([
      (templateMatch.interpolate || noMath).source,
      (templateMatch.evaluate || noMath).source,
    ].join('|') + '|$', 'g');

    var index = 0, source = "__p+='";
    text.replace(matcher, function(match, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escapesMatch, escapeReplace);
      index = offset + match.length;

      if (interpolate) {
        source += "'+" + interpolate + "+'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }
      
      return match;
    });

    source += "';\n"
    source = "with(obj){" + source + "}\n";
    source = "var __p='';\n" + source + "return __p;";
    console.log(source)

    var render;
    try {
      render = new Function('obj', source);
    } catch(e) {
      e.source = source;
      throw e;
    }

    return function(data) {
      return render.call(this, data);
    }
  }


  var html = `
    <ul data-test="test">
      <div>test</div>
      <% for (var i = 0, l = list.length; i < l; i++) { %>
      <li>
        <div><%= list[i].id %></div>
        <div><%= list[i].name %></div>
        <div><%= list[i].value %></div>
      </li>
      <% } %>
    </<ul>
  `
  var list = [
    {
      id: 1,
      name: 11,
      value: 111,
    },
    {
      id: 2,
      name: 22,
      value: 222,
    },
    {
      id: 3,
      name: 33,
      value: 333,
    },
  ]
  var _tpl = template(html)({list});
  console.log(_tpl)

})();