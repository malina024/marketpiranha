(function() {
  var Class = ng.core.Class;
  var Component = ng.core.Component;
  var NgModule = ng.core.NgModule;
  var BrowserModule = ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic = ng.platformBrowserDynamic.platformBrowserDynamic;

  var AlertService = Class({
    constructor: function AlertService() {
      this.alerts = marketAlerts;
    },
    getAlert: function() {
      return this.alerts[0];
    }
  });

  var AlertComponent = Component({
    selector: 'piranha-alert',
    template: '{{alerts.text}}'
  })
  .Class({
    constructor: [AlertService, function AlertComponent(alertService) {
      this.alerts = alertService.getAlert();
    }]
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AlertComponent],
    providers: [AlertService],
    bootstrap: [AlertComponent]
  })
  .Class({
    constructor: function() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

  var marketAlerts = [
    {
      "text": "Buy and short alerts are displayed here when the right market conditions take place."
    }
  ];

})();
