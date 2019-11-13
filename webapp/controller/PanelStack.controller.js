sap.ui.define([
	'jquery.sap.global',
	'sap/ui/core/mvc/Controller'
], function(jQuery, Controller) {
	"use strict";

	return Controller.extend("Catalog.CatalogZF.controller.PanelStack", {

		onInit: function () {

		},

		onHomePress: function () {
			var iconTabHeader = this.byId('iconTabHeader');
			iconTabHeader.setSelectedKey('invalidKey');

			var label = this.byId('labelId');
			label.setText('Das ist das Menu');
		},

		onSelectTab: function (event) {
			var label = this.byId('labelId');
			var tab = event.getParameter('item');

			label.setText(tab.getText());
		}
	});

});
