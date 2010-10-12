(function(orbium) {
	orbium.Loader = function() {
		this.props = null;

		this.construct = function() {
			this.props = [];

			var images = [
				{code: "announcer0", src: orbium.gfx_path+"announcer0.png"},
				{code: "announcer1", src: orbium.gfx_path+"announcer1.png"},
				{code: "announcer2", src: orbium.gfx_path+"announcer2.png"},
				{code: "announcer3", src: orbium.gfx_path+"announcer3.png"},
				{code: "bar0", src: orbium.gfx_path+"bar0.png"},
				{code: "bar1", src: orbium.gfx_path+"bar1.png"},
				{code: "bar2", src: orbium.gfx_path+"bar2.png"},
				{code: "bar3", src: orbium.gfx_path+"bar3.png"},
				{code: "bar4", src: orbium.gfx_path+"bar4.png"},
				{code: "bar5", src: orbium.gfx_path+"bar5.png"},
				{code: "bar6", src: orbium.gfx_path+"bar6.png"},
				{code: "bar7", src: orbium.gfx_path+"bar7.png"},
				{code: "bar8", src: orbium.gfx_path+"bar8.png"},
				{code: "bar9", src: orbium.gfx_path+"bar9.png"},
				{code: "bar10", src: orbium.gfx_path+"bar10.png"},
				{code: "bar11", src: orbium.gfx_path+"bar11.png"},
				{code: "bar12", src: orbium.gfx_path+"bar12.png"},
				{code: "bar13", src: orbium.gfx_path+"bar13.png"},
				{code: "bar14", src: orbium.gfx_path+"bar14.png"},
				{code: "bar15", src: orbium.gfx_path+"bar15.png"},
				{code: "clock0", src: orbium.gfx_path+"clock0.png"},
				{code: "clock1", src: orbium.gfx_path+"clock1.png"},
				{code: "clock2", src: orbium.gfx_path+"clock2.png"},
				{code: "clock3", src: orbium.gfx_path+"clock3.png"},
				{code: "clock4", src: orbium.gfx_path+"clock4.png"},
				{code: "clock5", src: orbium.gfx_path+"clock5.png"},
				{code: "clock6", src: orbium.gfx_path+"clock6.png"},
				{code: "clock7", src: orbium.gfx_path+"clock7.png"},
				{code: "clock8", src: orbium.gfx_path+"clock8.png"},
				{code: "clock9", src: orbium.gfx_path+"clock9.png"},
				{code: "counter0", src: orbium.gfx_path+"counter0.png"},
				{code: "counter1", src: orbium.gfx_path+"counter1.png"},
				{code: "counter2", src: orbium.gfx_path+"counter2.png"},
				{code: "counter3", src: orbium.gfx_path+"counter3.png"},
				{code: "counter4", src: orbium.gfx_path+"counter4.png"},
				{code: "crosstile0", src: orbium.gfx_path+"crosstile0.png"},
				{code: "crosstile1", src: orbium.gfx_path+"crosstile1.png"},
				{code: "crosstile2", src: orbium.gfx_path+"crosstile2.png"},
				{code: "crosstile3", src: orbium.gfx_path+"crosstile3.png"},
				{code: "crosstile4", src: orbium.gfx_path+"crosstile4.png"},
				{code: "director0", src: orbium.gfx_path+"director0.png"},
				{code: "director1", src: orbium.gfx_path+"director1.png"},
				{code: "director2", src: orbium.gfx_path+"director2.png"},
				{code: "director3", src: orbium.gfx_path+"director3.png"},
				{code: "emptytile0", src: orbium.gfx_path+"emptytile0.png"},
				{code: "emptytile1", src: orbium.gfx_path+"emptytile1.png"},
				{code: "emptytile2", src: orbium.gfx_path+"emptytile2.png"},
				{code: "emptytile3", src: orbium.gfx_path+"emptytile3.png"},
				{code: "emptytile4", src: orbium.gfx_path+"emptytile4.png"},
				{code: "emptytile5", src: orbium.gfx_path+"emptytile5.png"},
				{code: "emptytile6", src: orbium.gfx_path+"emptytile6.png"},
				{code: "explosion0", src: orbium.gfx_path+"explosion0.png"},
				{code: "explosion1", src: orbium.gfx_path+"explosion1.png"},
				{code: "explosion2", src: orbium.gfx_path+"explosion2.png"},
				{code: "explosion3", src: orbium.gfx_path+"explosion3.png"},
				{code: "horiztile0", src: orbium.gfx_path+"horiztile0.png"},
				{code: "horiztile1", src: orbium.gfx_path+"horiztile1.png"},
				{code: "horiztile2", src: orbium.gfx_path+"horiztile2.png"},
				{code: "horiztile3", src: orbium.gfx_path+"horiztile3.png"},
				{code: "horiztile4", src: orbium.gfx_path+"horiztile4.png"},
				{code: "horiztile5", src: orbium.gfx_path+"horiztile5.png"},
				{code: "inspector0", src: orbium.gfx_path+"inspector0.png"},
				{code: "inspector1", src: orbium.gfx_path+"inspector1.png"},
				{code: "inspector2", src: orbium.gfx_path+"inspector2.png"},
				{code: "inspector3", src: orbium.gfx_path+"inspector3.png"},
				{code: "marble0", src: orbium.gfx_path+"marble0.png"},
				{code: "marble1", src: orbium.gfx_path+"marble1.png"},
				{code: "marble2", src: orbium.gfx_path+"marble2.png"},
				{code: "marble3", src: orbium.gfx_path+"marble3.png"},
				{code: "marble4", src: orbium.gfx_path+"marble4.png"},
				{code: "marble5", src: orbium.gfx_path+"marble5.png"},
				{code: "marble6", src: orbium.gfx_path+"marble6.png"},
				{code: "marble7", src: orbium.gfx_path+"marble7.png"},
				{code: "marble8", src: orbium.gfx_path+"marble8.png"},
				{code: "marble9", src: orbium.gfx_path+"marble9.png"},
				{code: "marble10", src: orbium.gfx_path+"marble10.png"},
				{code: "marble11", src: orbium.gfx_path+"marble11.png"},
				{code: "marble12", src: orbium.gfx_path+"marble12.png"},
				{code: "marble13", src: orbium.gfx_path+"marble13.png"},
				{code: "marble14", src: orbium.gfx_path+"marble14.png"},
				{code: "marble15", src: orbium.gfx_path+"marble15.png"},
				{code: "marble16", src: orbium.gfx_path+"marble16.png"},
				{code: "marble17", src: orbium.gfx_path+"marble17.png"},
				{code: "marble18", src: orbium.gfx_path+"marble18.png"},
				{code: "marble19", src: orbium.gfx_path+"marble19.png"},
				{code: "marble20", src: orbium.gfx_path+"marble20.png"},
				{code: "marble21", src: orbium.gfx_path+"marble21.png"},
				{code: "marble22", src: orbium.gfx_path+"marble22.png"},
				{code: "marble23", src: orbium.gfx_path+"marble23.png"},
				{code: "marble24", src: orbium.gfx_path+"marble24.png"},
				{code: "marble25", src: orbium.gfx_path+"marble25.png"},
				{code: "marble26", src: orbium.gfx_path+"marble26.png"},
				{code: "marble27", src: orbium.gfx_path+"marble27.png"},
				{code: "marble28", src: orbium.gfx_path+"marble28.png"},
				{code: "marble29", src: orbium.gfx_path+"marble29.png"},
				{code: "marble30", src: orbium.gfx_path+"marble30.png"},
				{code: "marble31", src: orbium.gfx_path+"marble31.png"},
				{code: "marble32", src: orbium.gfx_path+"marble32.png"},
				{code: "marble33", src: orbium.gfx_path+"marble33.png"},
				{code: "marble34", src: orbium.gfx_path+"marble34.png"},
				{code: "marble35", src: orbium.gfx_path+"marble35.png"},
				{code: "marble36", src: orbium.gfx_path+"marble36.png"},
				{code: "marble37", src: orbium.gfx_path+"marble37.png"},
				{code: "marble38", src: orbium.gfx_path+"marble38.png"},
				{code: "marble39", src: orbium.gfx_path+"marble39.png"},
				{code: "marble40", src: orbium.gfx_path+"marble40.png"},
				{code: "marble41", src: orbium.gfx_path+"marble41.png"},
				{code: "marble42", src: orbium.gfx_path+"marble42.png"},
				{code: "marble43", src: orbium.gfx_path+"marble43.png"},
				{code: "marble44", src: orbium.gfx_path+"marble44.png"},
				{code: "marble45", src: orbium.gfx_path+"marble45.png"},
				{code: "marble46", src: orbium.gfx_path+"marble46.png"},
				{code: "marble47", src: orbium.gfx_path+"marble47.png"},
				{code: "matcher0", src: orbium.gfx_path+"matcher0.png"},
				{code: "modtile0", src: orbium.gfx_path+"modtile0.png"},
				{code: "modtile1", src: orbium.gfx_path+"modtile1.png"},
				{code: "modtile2", src: orbium.gfx_path+"modtile2.png"},
				{code: "modtile3", src: orbium.gfx_path+"modtile3.png"},
				{code: "modtile4", src: orbium.gfx_path+"modtile4.png"},
				{code: "modtile5", src: orbium.gfx_path+"modtile5.png"},
				{code: "modtile6", src: orbium.gfx_path+"modtile6.png"},
				{code: "modtile7", src: orbium.gfx_path+"modtile7.png"},
				{code: "modtile8", src: orbium.gfx_path+"modtile8.png"},
				{code: "modtile9", src: orbium.gfx_path+"modtile9.png"},
				{code: "modtile10", src: orbium.gfx_path+"modtile10.png"},
				{code: "modtile11", src: orbium.gfx_path+"modtile11.png"},
				{code: "modtile12", src: orbium.gfx_path+"modtile12.png"},
				{code: "modtile13", src: orbium.gfx_path+"modtile13.png"},
				{code: "modtile14", src: orbium.gfx_path+"modtile14.png"},
				{code: "rotatile0", src: orbium.gfx_path+"rotatile0.png"},
				{code: "rotatile1", src: orbium.gfx_path+"rotatile1.png"},
				{code: "rotatile2", src: orbium.gfx_path+"rotatile2.png"},
				{code: "rotatile3", src: orbium.gfx_path+"rotatile3.png"},
				{code: "rotatile4", src: orbium.gfx_path+"rotatile4.png"},
				{code: "rotatile5", src: orbium.gfx_path+"rotatile5.png"},
				{code: "rotatile6", src: orbium.gfx_path+"rotatile6.png"},
				{code: "rotatile7", src: orbium.gfx_path+"rotatile7.png"},
				{code: "rotatile8", src: orbium.gfx_path+"rotatile8.png"},
				{code: "rotatile9", src: orbium.gfx_path+"rotatile9.png"},
				{code: "rotatile10", src: orbium.gfx_path+"rotatile10.png"},
				{code: "rotatile11", src: orbium.gfx_path+"rotatile11.png"},
				{code: "rotatile12", src: orbium.gfx_path+"rotatile12.png"},
				{code: "rotatile13", src: orbium.gfx_path+"rotatile13.png"},
				{code: "rotatile14", src: orbium.gfx_path+"rotatile14.png"},
				{code: "rotatile15", src: orbium.gfx_path+"rotatile15.png"},
				{code: "rotatile16", src: orbium.gfx_path+"rotatile16.png"},
				{code: "rotatile17", src: orbium.gfx_path+"rotatile17.png"},
				{code: "rotatile18", src: orbium.gfx_path+"rotatile18.png"},
				{code: "rotatile19", src: orbium.gfx_path+"rotatile19.png"},
				{code: "rotatile20", src: orbium.gfx_path+"rotatile20.png"},
				{code: "rotatile21", src: orbium.gfx_path+"rotatile21.png"},
				{code: "rotatile22", src: orbium.gfx_path+"rotatile22.png"},
				{code: "rotatile23", src: orbium.gfx_path+"rotatile23.png"},
				{code: "rotatile24", src: orbium.gfx_path+"rotatile24.png"},
				{code: "rotatile25", src: orbium.gfx_path+"rotatile25.png"},
				{code: "rotatile26", src: orbium.gfx_path+"rotatile26.png"},
				{code: "rotatile27", src: orbium.gfx_path+"rotatile27.png"},
				{code: "rotatile28", src: orbium.gfx_path+"rotatile28.png"},
				{code: "rotatile29", src: orbium.gfx_path+"rotatile29.png"},
				{code: "rotator0", src: orbium.gfx_path+"rotator0.png"},
				{code: "rotator1", src: orbium.gfx_path+"rotator1.png"},
				{code: "rotator2", src: orbium.gfx_path+"rotator2.png"},
				{code: "rotator3", src: orbium.gfx_path+"rotator3.png"},
				{code: "rotator4", src: orbium.gfx_path+"rotator4.png"},
				{code: "rotator5", src: orbium.gfx_path+"rotator5.png"},
				{code: "rotator6", src: orbium.gfx_path+"rotator6.png"},
				{code: "rotator7", src: orbium.gfx_path+"rotator7.png"},
				{code: "rotator8", src: orbium.gfx_path+"rotator8.png"},
				{code: "rotator9", src: orbium.gfx_path+"rotator9.png"},
				{code: "rotator10", src: orbium.gfx_path+"rotator10.png"},
				{code: "rotator11", src: orbium.gfx_path+"rotator11.png"},
				{code: "rotator12", src: orbium.gfx_path+"rotator12.png"},
				{code: "rotator13", src: orbium.gfx_path+"rotator13.png"},
				{code: "rotator14", src: orbium.gfx_path+"rotator14.png"},
				{code: "rotator15", src: orbium.gfx_path+"rotator15.png"},
				{code: "rotator16", src: orbium.gfx_path+"rotator16.png"},
				{code: "rotator17", src: orbium.gfx_path+"rotator17.png"},
				{code: "rotator18", src: orbium.gfx_path+"rotator18.png"},
				{code: "rotator19", src: orbium.gfx_path+"rotator19.png"},
				{code: "rotator20", src: orbium.gfx_path+"rotator20.png"},
				{code: "rotator21", src: orbium.gfx_path+"rotator21.png"},
				{code: "rotator22", src: orbium.gfx_path+"rotator22.png"},
				{code: "rotator23", src: orbium.gfx_path+"rotator23.png"},
				{code: "rotator24", src: orbium.gfx_path+"rotator24.png"},
				{code: "rotator25", src: orbium.gfx_path+"rotator25.png"},
				{code: "rotator26", src: orbium.gfx_path+"rotator26.png"},
				{code: "rotator27", src: orbium.gfx_path+"rotator27.png"},
				{code: "rotator28", src: orbium.gfx_path+"rotator28.png"},
				{code: "rotator29", src: orbium.gfx_path+"rotator29.png"},
				{code: "rotator30", src: orbium.gfx_path+"rotator30.png"},
				{code: "rotator31", src: orbium.gfx_path+"rotator31.png"},
				{code: "sequencer0", src: orbium.gfx_path+"sequencer0.png"},
				{code: "teleporter0", src: orbium.gfx_path+"teleporter0.png"},
				{code: "teleporter1", src: orbium.gfx_path+"teleporter1.png"},
				{code: "teleporter2", src: orbium.gfx_path+"teleporter2.png"},
				{code: "timer0", src: orbium.gfx_path+"timer0.png"},
				{code: "timer1", src: orbium.gfx_path+"timer1.png"},
				{code: "transformer0", src: orbium.gfx_path+"transformer0.png"},
				{code: "transformer1", src: orbium.gfx_path+"transformer1.png"},
				{code: "transformer2", src: orbium.gfx_path+"transformer2.png"},
				{code: "transformer3", src: orbium.gfx_path+"transformer3.png"},
				{code: "verttile0", src: orbium.gfx_path+"verttile0.png"},
				{code: "verttile1", src: orbium.gfx_path+"verttile1.png"},
				{code: "verttile2", src: orbium.gfx_path+"verttile2.png"},
				{code: "verttile3", src: orbium.gfx_path+"verttile3.png"},
				{code: "verttile4", src: orbium.gfx_path+"verttile4.png"},
				{code: "verttile5", src: orbium.gfx_path+"verttile5.png"}
			];

			for (var i=0; i<images.length; i++) {
				var image = new Image();
				image.src = images[i].src;
				image.failure = false;
				image.onerror = function() {this.failure = true;};
				this[images[i].code] = image;

				orbium.Util.addArrayElement(this.props, images[i].code);
			}
		};
	};
}(window.orbium = window.orbium || {}));
