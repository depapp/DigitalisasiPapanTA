(function(window, undefined) {
  var dictionary = {
    "7757641a-cde1-4b65-9cae-5b24fcb83fb8": "Kontak",
    "e711c090-c1ea-4da9-a0f4-a206fa6ab0a7": "User",
    "2b9e03ad-1227-47ea-b421-b4d8726a2019": "PP TA",
    "53e358f1-7bae-4d72-b11e-385dc021bded": "Tentang",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Beranda",
    "78d4da25-3d65-4e75-947d-910832656244": "PP 4",
    "7f18afdc-df68-43c3-ad00-5769e6cf9b9e": "UserDetailPP3",
    "eaee0b62-3099-4b30-9563-c7bc08160c34": "UserDetailPP2",
    "b7ddd827-808f-4a6f-ba1a-014e4804fa26": "UserDetailPP1",
    "65b3b139-fe1f-482a-968a-3fa4123a38c9": "Masuk",
    "7184c264-d137-404b-8493-29a875264c32": "Admin",
    "c34a9b83-98c3-44d1-9e2c-19c6e1505750": "UserDetailTA2",
    "3a1277bc-7f9a-4ded-9211-08ef1b94f113": "UserDetailTA",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);