(function() {
	tinymce.PluginManager.add('hs_mce_button_arabic', function( editor, url ) {
		editor.addButton('hs_mce_button_arabic', {
			//text: 'Arabic',
			//icon: 'hs-mce-arabic-icon',
			title : 'Arabic',
			image : '/wp-content/themes/hs/custom-tinymce-buttons/arabic-new.png',
			onclick: function() {
				//editor.insertContent('WPExplorer.com is awesome!');
				editor.selection.setContent('<span class="arabic" dir="rtl">' + editor.selection.getContent() + '</span>');
			}
		});
	});
})();