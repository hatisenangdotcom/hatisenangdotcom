(function() {
	tinymce.PluginManager.add('hs_mce_button_footnote', function( editor, url ) {
		editor.addButton('hs_mce_button_footnote', {
			//text: 'Footnote',
			//icon: false,
			title : 'Footnote',
			image : '/wp-content/themes/hs/custom-tinymce-buttons/footnote.png',
			onclick: function() {
				//editor.insertContent('WPExplorer.com is awesome!');
				editor.selection.setContent('[efn_note]' + editor.selection.getContent() + '[/efn_note]');
			}
		});
	});
})();