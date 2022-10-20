//all "global" variables are contained within params object

var params;
function defineParams(){
	params = new function() {

		//holds the data object
		this.inputData = null;

		//this is the histogram DOM elements
		this.container = null;
		this.svg = null;

		//duration for transitions
		this.duration = 500;

		//for binning the data
		this.nBins = 20;
		this.minX = -3000.;
		this.maxX = 5000.;
		this.foregroundColor = getComputedStyle(document.documentElement).getPropertyValue('--foreground-color');
		this.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--background-color');
		this.fillColor = getComputedStyle(document.documentElement).getPropertyValue('--highlight-color');
		this.hoverColor = getComputedStyle(document.documentElement).getPropertyValue('--hover-color');

		//store the binned data
		this.histAll = null;
		this.histTypeA = null;
		this.histTypeB = null;

		//store the histogram axis converters
		this.xAxis = null;
		this.yAxis = null;

		//dimensions of the containers
		this.width = 960;
		this.plotWidthRatio = 460/760;
		this.plotWidth = this.width*this.plotWidthRatio;
		this.searchWidth = this.width - this.plotWidth;
		this.height = 400;
		this.buttonHeight = 40;
		this.buttonFontSize = this.buttonHeight*0.4;
		this.histMargin = {'top': 10, 'right': 15, 'bottom': 40, 'left': 15};
		this.histWidth = this.plotWidth - this.histMargin.left - this.histMargin.right;
		this.histHeight = this.height - this.buttonHeight - this.histMargin.top - this.histMargin.bottom;

		//for searching
		this.searchTimeout = null;
		this.isTypeA = false;
		this.isTypeB = false;

	};


}
