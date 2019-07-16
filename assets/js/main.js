---
---
(function($) {

    $(document).ready(function() {

        // search
        SimpleJekyllSearch({
          "limit": 1000,
          "searchInput": document.getElementById('search-input'),
          "resultsContainer": document.getElementById('results-container'),
          "json": '/search.json',
          "noResultsText": "<li>Nenhum resultado...</li>",
          "searchResultTemplate": '<li class="list-inline-item"><a href="{{ site.url }}{url}">{title}</a></li>'
        });


    });

})(jQuery);
