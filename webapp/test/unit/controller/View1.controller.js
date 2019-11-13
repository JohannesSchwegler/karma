/*global QUnit*/

sap.ui.define([
	"Catalog/CatalogZF/controller/View1.controller"
], function (Controller) {
	"use strict";

	QUnit.module("View1 Controller");

	QUnit.test("I should test the View1 controller", function (assert) {
		assert.equal( true,true);
	});

	QUnit.jUnitDone(function(report) {
		if (typeof console !== 'undefined') {
		  console.log(report.xml);
		}
	  });

});