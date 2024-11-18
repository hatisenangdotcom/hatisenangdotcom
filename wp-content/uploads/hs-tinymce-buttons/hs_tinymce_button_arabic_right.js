(function() {
	tinymce.PluginManager.add('hs_mce_button_arabic_right', function( editor, url ) {
		editor.addButton('hs_mce_button_arabic_right', {
			//text: 'Arabic Right',
			//icon: false,
			title : 'Arabic Right',
			image : '/wp-content/uploads/hs-tinymce-buttons/arabic-right.png',
			onclick: function() {
				//editor.insertContent('WPExplorer.com is awesome!');
				editor.selection.setContent('<p style="text-align: right;"><span class="arabic" dir="rtl">' + editor.selection.getContent() + '</span></p>');
			}
		});
	});
})();