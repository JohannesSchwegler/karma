sap.ui.define([
	"jquery.sap.global",
	"sap/ui/core/Fragment",
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/Popover",
	"sap/m/Button"
], function (jQuery, Fragment, Controller, JSONModel, Popover, Button) {
	"use strict";
	var CController = Controller.extend("sap.tnt.sample.ToolPage.ToolPage", {
		model: new sap.ui.model.json.JSONModel(),

		data: {
			navigation: [{
				title: "Accordion",
				icon: "sap-icon://drop-down-list",
				expanded: true,
				key: "root1"

			}, {
				title: "Button",
				icon: "sap-icon://chevron-phase",
				key: "root2"
			}, {
				title: "Calender",
				icon: "sap-icon://accelerated",
				key: "Calender"

			}, {
				title: "Field",
				icon: "sap-icon://border",
				key: "Field"

			}, {
				title: "Group",
				icon: "sap-icon://action-settings",
				key: "Group"

			}, {
				title: "List",
				icon: "sap-icon://list",
				key: "List"

			}, {
				title: "LoadingAnimation",
				icon: "sap-icon://lateness",
				key: "LoadingAnimation"

			}, {
				title: "Menu",
				icon: "sap-icon://menu2",
				key: "Menu"

			}, {
				title: "Navigation",
				icon: "sap-icon://map-2",
				key: "Navigation"

			}, {
				title: "PanelStack",
				icon: "sap-icon://dimension",
				key: "PanelStack"

			}, {
				title: "PopupWindow",
				icon: "sap-icon://popup-window",
				key: "PopupWindow"
			}, {
				title: "Scrollbar",
				icon: "sap-icon://sorting-ranking",
				key: "Scrollbar"
			}, {
				title: "Slider",
				icon: "sap-icon://slim-arrow-right",
				key: "Slider"
			},  {
				title: "Table",
				icon: "sap-icon://table-view",
				key: "Table"
			}, {
				title: "TabStrip",
				icon: "sap-icon://status-inactive",
				key: "TabStrip"
			}, {
				title: "Text",
				icon: "sap-icon://attachment-text-file",
				key: "Text"
			}, {
				title: "Toolbar",
				icon: "sap-icon://bookmark",
				key: "Toolbar"
			}],

			headerItems: [{
				text: "File"
			}, {
				text: "Edit"
			}, {
				text: "View"
			}, {
				text: "Settings"
			}, {
				text: "Help"
			}]
		},
		Init: function () {
			if (!this.dialogFragment) {
				this.dialogFragment = sap.ui.xmlfragment("Catalog.CatalogZF.fragment.Popup", this);
				sap.ui.getCore().byId("cancelBtn").attachPress(function () {
					this.dialogFragment.close();
				}.bind(this));
			}

			this.dialogFragment.attachAfterClose(function () {
				this.destroy(); // view is destroyed as a video plays inside
			});
			this.dialogFragment.open();

		},
		onInit: function () {
			this.model.setData(this.data);
			this.getView().setModel(this.model);
			this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);

		},
		onItemSelect: function (oEvent) {
			var item = oEvent.getParameter("item");
			var viewId = this.getView().getId();
			sap.ui.getCore().byId(viewId + "--pageContainer").to(viewId + "--" + item.getKey());
		},
		handleUserNamePress: function (event) {
			var popover = new Popover({
				showHeader: false,
				placement: sap.m.PlacementType.Bottom,
				content: [
					new Button({
						text: "Feedback",
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: "Help",
						type: sap.m.ButtonType.Transparent
					}),
					new Button({
						text: "Logout",
						type: sap.m.ButtonType.Transparent
					})
				]
			}).addStyleClass("sapMOTAPopover sapTntToolHeaderPopover");
			popover.openBy(event.getSource());
		},
		onSideNavButtonPress: function () {
			var viewId = this.getView().getId();
			var toolPage = sap.ui.getCore().byId(viewId + "--toolPage");
			var sideExpanded = toolPage.getSideExpanded();
			this._setToggleButtonTooltip(sideExpanded);
			toolPage.setSideExpanded(!toolPage.getSideExpanded());
		},
		_setToggleButtonTooltip: function (bLarge) {
			var toggleButton = this.byId("sideNavigationToggleButton");
			if (bLarge) {
				toggleButton.setTooltip("Large Size Navigation");
			} else {
				toggleButton.setTooltip("Small Size Navigation");
			}
		},
		/**
		 *@memberOf Catalog.CatalogZF.controller.TESTforPage
		 */
		action: function (oEvent) {
			var that = this;
			var actionParameters = JSON.parse(oEvent.getSource().data("wiring").replace(/'/g, "\""));
			var eventType = oEvent.getId();
			var aTargets = actionParameters[eventType].targets || [];
			aTargets.forEach(function (oTarget) {
				var oControl = that.byId(oTarget.id);
				if (oControl) {
					var oParams = {};
					for (var prop in oTarget.parameters) {
						oParams[prop] = oEvent.getParameter(oTarget.parameters[prop]);
					}
					oControl[oTarget.action](oParams);
				}
			});
			var oNavigation = actionParameters[eventType].navigation;
			if (oNavigation) {
				var oParams = {};
				(oNavigation.keys || []).forEach(function (prop) {
					oParams[prop.name] = encodeURIComponent(JSON.stringify({
						value: oEvent.getSource().getBindingContext(oNavigation.model).getProperty(prop.name),
						type: prop.type
					}));
				});
				if (Object.getOwnPropertyNames(oParams).length !== 0) {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName, oParams);
				} else {
					this.getOwnerComponent().getRouter().navTo(oNavigation.routeName);
				}
			}
		}

	});

	return CController;
});