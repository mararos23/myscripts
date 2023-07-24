(function (thisObj) {
	newPanel(thisObj);

	function newPanel(thisObj) {
		var win =
			thisObj instanceof Panel
				? thisObj
				: new Window("palette", "Expression Script", undefined);

		var tabPanel = win.add("tabbedpanel");
		tabPanel.preferredSize = [350, 200];

		//todo ---- Tab one ----
		var tabOne = tabPanel.add("tab", undefined, "Custom Expression");
		tabOne.alignChildren = "fill";

		var editText = tabOne.add("edittext", undefined, "loopOut();");

		var applyBtn = tabOne.add("button", undefined, "Apply");

		//todo ---- Tab two ----
		var tabTwo = tabPanel.add("tab", undefined, "Expressions");
		tabTwo.alignChildren = "right";

		var dropdownGroup = tabTwo.add("group");
		dropdownGroup.orientation = "row";

		dropdownGroup.add("statictext", undefined, "Expression: ");
		var dropdown = dropdownGroup.add("dropdownlist", undefined, [
			"wiggle(2,5);",
			"time * 100",
			"loopOut();",
		]);
		dropdown.selection = 0;
		dropdown.preferredSize.width = 240;

		var btnGroup = tabTwo.add("group");
		btnGroup.orientation = "row";
		var dropdownApply = btnGroup.add("button", undefined, "Apply");
		var dropdownDelete = btnGroup.add("button", undefined, "Delete");

		//todo ---- Action ----
		applyBtn.onClick = function () {
			applyCustomExpression(editText.text);
		};

		dropdownApply.onClick = function () {
			applyCustomExpression(dropdown.selection.text);
		};

		dropdownDelete.onClick = function () {
			dropdown.remove(dropdown.selection);
			dropdown.selection = 0;
		};
		win.onResizing = win.onResize = function () {
			this.layout.resize();
		};
		win instanceof Window
			? (win.center(), win.show())
			: (win.layout.layout(true), win.layout.resize());
	}
	function applyCustomExpression(expression) {
		app.beginUndoGroup("My Script Action");
		var selected = app.project.activeItem.selectedProperties; // selected Properties
		if (selected.length == 0) {
			alert("Please Select Property");
		} else {
			for (var i = 0; i < selected.length; i++) {
				selected[i].expression = expression; // setValue();  expression = "wiggle(5,5);";
			}
		}
		app.endUndoGroup;
	}
})(this);
