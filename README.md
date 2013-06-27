# AngularJS Twitter Filter Collection
This is a simple collection of AngularJS filters to link a twitter username, link a hashtag, and properly format a full tweet. This is mostly me cutting my teeth on [AngularJS filters](http://docs.angularjs.org/guide/dev_guide.templates.filters.creating_filters). I might expand it in the future if I find more useful filters. If you happen to find one, feel free to add an issue (or even better, a pull request).

## Examples

I used literals to make setup easier for me but you can plug a variable in the same way.

    <div ng-bind-html="'@iDevinClark' | linkUsername"></div>
    <div ng-bind-html="'#twitter' | linkHashtag"></div>
    <div ng-bind-html="'ngBoilerplate v0.3.0 Released #AngularJS http://j.mp/15FRF4h  via @iDevinClark' | tweet"></div>

`ng-bind-html` is necessary because if not it will render encode the HTML. If there is a way to do this without the dependency, I would love to hear about it. Open an issue and let me know.

## Dependencies
* [ngSanitize](http://docs.angularjs.org/api/ngSanitize)