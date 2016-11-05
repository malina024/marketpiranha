(function() {
  var Component = ng.core.Component;
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

  var AppComponent = Component({
    selector: 'piranha-alert',
    template: '<h1>{{alert.text}}</h1>'
  })
  .Class({
    constructor: function() {
      this.alert = alerts[0];
    }
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

  var alerts = [
    {
      "text": "Buy and short alerts are displayed here when the right market conditions take place."
    }
  ];

})();
