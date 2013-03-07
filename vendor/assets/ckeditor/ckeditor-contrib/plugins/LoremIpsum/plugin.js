CKEDITOR.plugins.add( 'LoremIpsum',
{
	init: function( editor )
	{
		editor.addCommand( 'loremIpsumDialog', new CKEDITOR.dialogCommand( 'loremIpsumDialog' ) );
		editor.ui.addButton( 'LoremIpsum',
		{
			label: 'Add Lorem Impsum text',
			command: 'loremIpsumDialog',
			icon: this.path + 'images/icon.png'
		} );
		CKEDITOR.dialog.add( 'loremIpsumDialog', function( editor )
		{
			return {
				title : 'Lorem Impsum',
				minWidth : 400,
				minHeight : 100,
				contents :
				[
					{
						id : 'general',
						label : 'Settings',
						elements :
						[
							{
								type : 'html',
								html : 'Select the number of paragraphs (1-7) and click Okay.'
							},

							{
								type : 'select',
								id : 'contents',
								label : 'Paragraphs',
								items : 
								[
									[ 'One', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem arcu, nec pretium odio. In ullamcorper, eros dapibus sollicitudin lacinia, ante turpis fringilla lectus, id dignissim nisi tellus ac tellus. Quisque a felis lacus, et euismod quam. Curabitur feugiat luctus euismod. In condimentum velit eu nulla mollis id vestibulum nisi rutrum. Morbi ut tellus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et libero ut neque pulvinar egestas sit amet sed libero. Phasellus semper magna non risus accumsan id mollis lacus volutpat. Phasellus congue dapibus nisl eget rutrum. Phasellus elementum nulla non nisl dapibus vestibulum. In libero dui, pellentesque et aliquam sed, auctor nec ante. Morbi et risus sem, vel porta leo. Aenean nunc enim, aliquet ut euismod nec, fermentum nec orci.' ],
									[ 'Two', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem arcu, nec pretium odio. In ullamcorper, eros dapibus sollicitudin lacinia, ante turpis fringilla lectus, id dignissim nisi tellus ac tellus. Quisque a felis lacus, et euismod quam. Curabitur feugiat luctus euismod. In condimentum velit eu nulla mollis id vestibulum nisi rutrum. Morbi ut tellus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et libero ut neque pulvinar egestas sit amet sed libero. Phasellus semper magna non risus accumsan id mollis lacus volutpat. Phasellus congue dapibus nisl eget rutrum. Phasellus elementum nulla non nisl dapibus vestibulum. In libero dui, pellentesque et aliquam sed, auctor nec ante. Morbi et risus sem, vel porta leo. Aenean nunc enim, aliquet ut euismod nec, fermentum nec orci.<p>Phasellus mauris lectus, mollis vel sollicitudin tristique, ultrices a turpis. Fusce sagittis ultricies enim vel mattis. Sed vel est at justo dapibus mattis. Suspendisse ut ante lorem. Aliquam erat volutpat. Donec mollis, justo vel eleifend porta, sem mi rutrum metus, mollis volutpat nibh nulla in enim. Quisque suscipit lobortis sem eu hendrerit. Proin sagittis vestibulum sem, vitae tincidunt libero blandit rutrum. Phasellus nec malesuada sem. Praesent sed fringilla lacus. Curabitur faucibus, sapien in luctus tempor, urna lacus dictum est, a bibendum ipsum quam ac eros.</p>' ],
									[ 'Three', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem arcu, nec pretium odio. In ullamcorper, eros dapibus sollicitudin lacinia, ante turpis fringilla lectus, id dignissim nisi tellus ac tellus. Quisque a felis lacus, et euismod quam. Curabitur feugiat luctus euismod. In condimentum velit eu nulla mollis id vestibulum nisi rutrum. Morbi ut tellus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et libero ut neque pulvinar egestas sit amet sed libero. Phasellus semper magna non risus accumsan id mollis lacus volutpat. Phasellus congue dapibus nisl eget rutrum. Phasellus elementum nulla non nisl dapibus vestibulum. In libero dui, pellentesque et aliquam sed, auctor nec ante. Morbi et risus sem, vel porta leo. Aenean nunc enim, aliquet ut euismod nec, fermentum nec orci.<p>Phasellus mauris lectus, mollis vel sollicitudin tristique, ultrices a turpis. Fusce sagittis ultricies enim vel mattis. Sed vel est at justo dapibus mattis. Suspendisse ut ante lorem. Aliquam erat volutpat. Donec mollis, justo vel eleifend porta, sem mi rutrum metus, mollis volutpat nibh nulla in enim. Quisque suscipit lobortis sem eu hendrerit. Proin sagittis vestibulum sem, vitae tincidunt libero blandit rutrum. Phasellus nec malesuada sem. Praesent sed fringilla lacus. Curabitur faucibus, sapien in luctus tempor, urna lacus dictum est, a bibendum ipsum quam ac eros.</p><p>Vestibulum est arcu, pharetra sit amet rutrum eu, sagittis eu lacus. Vivamus pellentesque mollis purus vitae mollis. Nullam tempus lobortis arcu, ac malesuada tortor pellentesque ut. Pellentesque facilisis imperdiet arcu id mollis. Phasellus et pretium ante. Aliquam elementum, neque ut porttitor euismod, leo augue fermentum metus, eget pretium purus velit commodo elit. Nulla magna massa, elementum ut sagittis sit amet, varius eu eros. Ut eleifend elementum massa id bibendum. Phasellus a mollis diam. Maecenas dignissim tortor et neque elementum vel facilisis sapien accumsan. Duis in velit turpis. Aliquam mollis, leo ut tempor suscipit, leo nisi imperdiet massa, at placerat velit enim a odio.</p>' ],
									[ 'Four', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem arcu, nec pretium odio. In ullamcorper, eros dapibus sollicitudin lacinia, ante turpis fringilla lectus, id dignissim nisi tellus ac tellus. Quisque a felis lacus, et euismod quam. Curabitur feugiat luctus euismod. In condimentum velit eu nulla mollis id vestibulum nisi rutrum. Morbi ut tellus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et libero ut neque pulvinar egestas sit amet sed libero. Phasellus semper magna non risus accumsan id mollis lacus volutpat. Phasellus congue dapibus nisl eget rutrum. Phasellus elementum nulla non nisl dapibus vestibulum. In libero dui, pellentesque et aliquam sed, auctor nec ante. Morbi et risus sem, vel porta leo. Aenean nunc enim, aliquet ut euismod nec, fermentum nec orci.<p>Phasellus mauris lectus, mollis vel sollicitudin tristique, ultrices a turpis. Fusce sagittis ultricies enim vel mattis. Sed vel est at justo dapibus mattis. Suspendisse ut ante lorem. Aliquam erat volutpat. Donec mollis, justo vel eleifend porta, sem mi rutrum metus, mollis volutpat nibh nulla in enim. Quisque suscipit lobortis sem eu hendrerit. Proin sagittis vestibulum sem, vitae tincidunt libero blandit rutrum. Phasellus nec malesuada sem. Praesent sed fringilla lacus. Curabitur faucibus, sapien in luctus tempor, urna lacus dictum est, a bibendum ipsum quam ac eros.</p><p>Vestibulum est arcu, pharetra sit amet rutrum eu, sagittis eu lacus. Vivamus pellentesque mollis purus vitae mollis. Nullam tempus lobortis arcu, ac malesuada tortor pellentesque ut. Pellentesque facilisis imperdiet arcu id mollis. Phasellus et pretium ante. Aliquam elementum, neque ut porttitor euismod, leo augue fermentum metus, eget pretium purus velit commodo elit. Nulla magna massa, elementum ut sagittis sit amet, varius eu eros. Ut eleifend elementum massa id bibendum. Phasellus a mollis diam. Maecenas dignissim tortor et neque elementum vel facilisis sapien accumsan. Duis in velit turpis. Aliquam mollis, leo ut tempor suscipit, leo nisi imperdiet massa, at placerat velit enim a odio.</p><p>Proin in urna sapien. Integer sed enim diam, ut adipiscing mi. Mauris fringilla eleifend lorem, sit amet gravida urna vestibulum vel. Mauris interdum tempus quam, et aliquam lacus blandit vel. Maecenas sit amet elit ac elit placerat molestie. Nam pellentesque vestibulum sem ac malesuada. Vestibulum lacus turpis, scelerisque in rhoncus quis, ultricies ut tellus. Quisque eget enim leo, a elementum lacus. Integer feugiat, nunc pellentesque faucibus faucibus, sem augue dictum dui, vel venenatis nulla quam eget diam. Integer sit amet ligula mauris. Fusce quis vestibulum ante. Integer non lobortis nisl. Nulla consectetur nisi et metus lacinia auctor. Cras sit amet elit libero, iaculis ultricies odio. Donec in tellus sapien. Maecenas malesuada urna in diam mollis pretium.</p>' ],
									[ 'Five', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem arcu, nec pretium odio. In ullamcorper, eros dapibus sollicitudin lacinia, ante turpis fringilla lectus, id dignissim nisi tellus ac tellus. Quisque a felis lacus, et euismod quam. Curabitur feugiat luctus euismod. In condimentum velit eu nulla mollis id vestibulum nisi rutrum. Morbi ut tellus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et libero ut neque pulvinar egestas sit amet sed libero. Phasellus semper magna non risus accumsan id mollis lacus volutpat. Phasellus congue dapibus nisl eget rutrum. Phasellus elementum nulla non nisl dapibus vestibulum. In libero dui, pellentesque et aliquam sed, auctor nec ante. Morbi et risus sem, vel porta leo. Aenean nunc enim, aliquet ut euismod nec, fermentum nec orci.<p>Phasellus mauris lectus, mollis vel sollicitudin tristique, ultrices a turpis. Fusce sagittis ultricies enim vel mattis. Sed vel est at justo dapibus mattis. Suspendisse ut ante lorem. Aliquam erat volutpat. Donec mollis, justo vel eleifend porta, sem mi rutrum metus, mollis volutpat nibh nulla in enim. Quisque suscipit lobortis sem eu hendrerit. Proin sagittis vestibulum sem, vitae tincidunt libero blandit rutrum. Phasellus nec malesuada sem. Praesent sed fringilla lacus. Curabitur faucibus, sapien in luctus tempor, urna lacus dictum est, a bibendum ipsum quam ac eros.</p><p>Vestibulum est arcu, pharetra sit amet rutrum eu, sagittis eu lacus. Vivamus pellentesque mollis purus vitae mollis. Nullam tempus lobortis arcu, ac malesuada tortor pellentesque ut. Pellentesque facilisis imperdiet arcu id mollis. Phasellus et pretium ante. Aliquam elementum, neque ut porttitor euismod, leo augue fermentum metus, eget pretium purus velit commodo elit. Nulla magna massa, elementum ut sagittis sit amet, varius eu eros. Ut eleifend elementum massa id bibendum. Phasellus a mollis diam. Maecenas dignissim tortor et neque elementum vel facilisis sapien accumsan. Duis in velit turpis. Aliquam mollis, leo ut tempor suscipit, leo nisi imperdiet massa, at placerat velit enim a odio.</p><p>Proin in urna sapien. Integer sed enim diam, ut adipiscing mi. Mauris fringilla eleifend lorem, sit amet gravida urna vestibulum vel. Mauris interdum tempus quam, et aliquam lacus blandit vel. Maecenas sit amet elit ac elit placerat molestie. Nam pellentesque vestibulum sem ac malesuada. Vestibulum lacus turpis, scelerisque in rhoncus quis, ultricies ut tellus. Quisque eget enim leo, a elementum lacus. Integer feugiat, nunc pellentesque faucibus faucibus, sem augue dictum dui, vel venenatis nulla quam eget diam. Integer sit amet ligula mauris. Fusce quis vestibulum ante. Integer non lobortis nisl. Nulla consectetur nisi et metus lacinia auctor. Cras sit amet elit libero, iaculis ultricies odio. Donec in tellus sapien. Maecenas malesuada urna in diam mollis pretium.</p><p>Sed scelerisque neque facilisis nibh pulvinar interdum. In hac habitasse platea dictumst. Nullam ac ante eget tortor aliquam imperdiet. Proin laoreet turpis ut mauris mollis pretium. Curabitur vel tortor nisl, at facilisis nulla. Phasellus faucibus, nunc sed semper porttitor, magna mauris ultrices sapien, commodo viverra diam arcu a mauris. Cras a tristique purus. Aenean interdum, dui et venenatis elementum, libero nunc dignissim dolor, at posuere nisi magna et enim. Pellentesque eleifend hendrerit magna. Maecenas pretium nulla eget purus posuere ultricies. Etiam et velit ligula, a tempor neque. Integer ut elit at tortor placerat varius. Proin vehicula hendrerit neque ac pulvinar. Mauris dapibus dui quis turpis pretium nec gravida augue porta. Curabitur aliquam posuere auctor.</p>' ],
									[ 'Six', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem arcu, nec pretium odio. In ullamcorper, eros dapibus sollicitudin lacinia, ante turpis fringilla lectus, id dignissim nisi tellus ac tellus. Quisque a felis lacus, et euismod quam. Curabitur feugiat luctus euismod. In condimentum velit eu nulla mollis id vestibulum nisi rutrum. Morbi ut tellus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et libero ut neque pulvinar egestas sit amet sed libero. Phasellus semper magna non risus accumsan id mollis lacus volutpat. Phasellus congue dapibus nisl eget rutrum. Phasellus elementum nulla non nisl dapibus vestibulum. In libero dui, pellentesque et aliquam sed, auctor nec ante. Morbi et risus sem, vel porta leo. Aenean nunc enim, aliquet ut euismod nec, fermentum nec orci.<p>Phasellus mauris lectus, mollis vel sollicitudin tristique, ultrices a turpis. Fusce sagittis ultricies enim vel mattis. Sed vel est at justo dapibus mattis. Suspendisse ut ante lorem. Aliquam erat volutpat. Donec mollis, justo vel eleifend porta, sem mi rutrum metus, mollis volutpat nibh nulla in enim. Quisque suscipit lobortis sem eu hendrerit. Proin sagittis vestibulum sem, vitae tincidunt libero blandit rutrum. Phasellus nec malesuada sem. Praesent sed fringilla lacus. Curabitur faucibus, sapien in luctus tempor, urna lacus dictum est, a bibendum ipsum quam ac eros.</p><p>Vestibulum est arcu, pharetra sit amet rutrum eu, sagittis eu lacus. Vivamus pellentesque mollis purus vitae mollis. Nullam tempus lobortis arcu, ac malesuada tortor pellentesque ut. Pellentesque facilisis imperdiet arcu id mollis. Phasellus et pretium ante. Aliquam elementum, neque ut porttitor euismod, leo augue fermentum metus, eget pretium purus velit commodo elit. Nulla magna massa, elementum ut sagittis sit amet, varius eu eros. Ut eleifend elementum massa id bibendum. Phasellus a mollis diam. Maecenas dignissim tortor et neque elementum vel facilisis sapien accumsan. Duis in velit turpis. Aliquam mollis, leo ut tempor suscipit, leo nisi imperdiet massa, at placerat velit enim a odio.</p><p>Proin in urna sapien. Integer sed enim diam, ut adipiscing mi. Mauris fringilla eleifend lorem, sit amet gravida urna vestibulum vel. Mauris interdum tempus quam, et aliquam lacus blandit vel. Maecenas sit amet elit ac elit placerat molestie. Nam pellentesque vestibulum sem ac malesuada. Vestibulum lacus turpis, scelerisque in rhoncus quis, ultricies ut tellus. Quisque eget enim leo, a elementum lacus. Integer feugiat, nunc pellentesque faucibus faucibus, sem augue dictum dui, vel venenatis nulla quam eget diam. Integer sit amet ligula mauris. Fusce quis vestibulum ante. Integer non lobortis nisl. Nulla consectetur nisi et metus lacinia auctor. Cras sit amet elit libero, iaculis ultricies odio. Donec in tellus sapien. Maecenas malesuada urna in diam mollis pretium.</p><p>Sed scelerisque neque facilisis nibh pulvinar interdum. In hac habitasse platea dictumst. Nullam ac ante eget tortor aliquam imperdiet. Proin laoreet turpis ut mauris mollis pretium. Curabitur vel tortor nisl, at facilisis nulla. Phasellus faucibus, nunc sed semper porttitor, magna mauris ultrices sapien, commodo viverra diam arcu a mauris. Cras a tristique purus. Aenean interdum, dui et venenatis elementum, libero nunc dignissim dolor, at posuere nisi magna et enim. Pellentesque eleifend hendrerit magna. Maecenas pretium nulla eget purus posuere ultricies. Etiam et velit ligula, a tempor neque. Integer ut elit at tortor placerat varius. Proin vehicula hendrerit neque ac pulvinar. Mauris dapibus dui quis turpis pretium nec gravida augue porta. Curabitur aliquam posuere auctor.</p><p>Donec quis risus enim, vitae elementum turpis. Praesent ut purus eget ante pulvinar varius vel in elit. Vestibulum rhoncus ultrices fermentum. Aenean mi justo, pretium eget semper vitae, faucibus id tortor. Quisque eget lectus sed lacus venenatis congue vel id lorem. Nunc ac felis eget sapien auctor rutrum ut luctus orci. Ut consectetur sapien quis erat ornare rutrum. Mauris nec ornare ante. Pellentesque vel lacus tortor. Duis sit amet justo purus, sed ultricies magna. Maecenas at sodales sem. Vestibulum sollicitudin ligula adipiscing tellus ornare pharetra. Proin non orci a ante rhoncus blandit sed placerat est.</p>'],
									[ 'Seven', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed et sem arcu, nec pretium odio. In ullamcorper, eros dapibus sollicitudin lacinia, ante turpis fringilla lectus, id dignissim nisi tellus ac tellus. Quisque a felis lacus, et euismod quam. Curabitur feugiat luctus euismod. In condimentum velit eu nulla mollis id vestibulum nisi rutrum. Morbi ut tellus augue. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et libero ut neque pulvinar egestas sit amet sed libero. Phasellus semper magna non risus accumsan id mollis lacus volutpat. Phasellus congue dapibus nisl eget rutrum. Phasellus elementum nulla non nisl dapibus vestibulum. In libero dui, pellentesque et aliquam sed, auctor nec ante. Morbi et risus sem, vel porta leo. Aenean nunc enim, aliquet ut euismod nec, fermentum nec orci.<p>Phasellus mauris lectus, mollis vel sollicitudin tristique, ultrices a turpis. Fusce sagittis ultricies enim vel mattis. Sed vel est at justo dapibus mattis. Suspendisse ut ante lorem. Aliquam erat volutpat. Donec mollis, justo vel eleifend porta, sem mi rutrum metus, mollis volutpat nibh nulla in enim. Quisque suscipit lobortis sem eu hendrerit. Proin sagittis vestibulum sem, vitae tincidunt libero blandit rutrum. Phasellus nec malesuada sem. Praesent sed fringilla lacus. Curabitur faucibus, sapien in luctus tempor, urna lacus dictum est, a bibendum ipsum quam ac eros.</p><p>Vestibulum est arcu, pharetra sit amet rutrum eu, sagittis eu lacus. Vivamus pellentesque mollis purus vitae mollis. Nullam tempus lobortis arcu, ac malesuada tortor pellentesque ut. Pellentesque facilisis imperdiet arcu id mollis. Phasellus et pretium ante. Aliquam elementum, neque ut porttitor euismod, leo augue fermentum metus, eget pretium purus velit commodo elit. Nulla magna massa, elementum ut sagittis sit amet, varius eu eros. Ut eleifend elementum massa id bibendum. Phasellus a mollis diam. Maecenas dignissim tortor et neque elementum vel facilisis sapien accumsan. Duis in velit turpis. Aliquam mollis, leo ut tempor suscipit, leo nisi imperdiet massa, at placerat velit enim a odio.</p><p>Proin in urna sapien. Integer sed enim diam, ut adipiscing mi. Mauris fringilla eleifend lorem, sit amet gravida urna vestibulum vel. Mauris interdum tempus quam, et aliquam lacus blandit vel. Maecenas sit amet elit ac elit placerat molestie. Nam pellentesque vestibulum sem ac malesuada. Vestibulum lacus turpis, scelerisque in rhoncus quis, ultricies ut tellus. Quisque eget enim leo, a elementum lacus. Integer feugiat, nunc pellentesque faucibus faucibus, sem augue dictum dui, vel venenatis nulla quam eget diam. Integer sit amet ligula mauris. Fusce quis vestibulum ante. Integer non lobortis nisl. Nulla consectetur nisi et metus lacinia auctor. Cras sit amet elit libero, iaculis ultricies odio. Donec in tellus sapien. Maecenas malesuada urna in diam mollis pretium.</p><p>Sed scelerisque neque facilisis nibh pulvinar interdum. In hac habitasse platea dictumst. Nullam ac ante eget tortor aliquam imperdiet. Proin laoreet turpis ut mauris mollis pretium. Curabitur vel tortor nisl, at facilisis nulla. Phasellus faucibus, nunc sed semper porttitor, magna mauris ultrices sapien, commodo viverra diam arcu a mauris. Cras a tristique purus. Aenean interdum, dui et venenatis elementum, libero nunc dignissim dolor, at posuere nisi magna et enim. Pellentesque eleifend hendrerit magna. Maecenas pretium nulla eget purus posuere ultricies. Etiam et velit ligula, a tempor neque. Integer ut elit at tortor placerat varius. Proin vehicula hendrerit neque ac pulvinar. Mauris dapibus dui quis turpis pretium nec gravida augue porta. Curabitur aliquam posuere auctor.</p><p>Donec quis risus enim, vitae elementum turpis. Praesent ut purus eget ante pulvinar varius vel in elit. Vestibulum rhoncus ultrices fermentum. Aenean mi justo, pretium eget semper vitae, faucibus id tortor. Quisque eget lectus sed lacus venenatis congue vel id lorem. Nunc ac felis eget sapien auctor rutrum ut luctus orci. Ut consectetur sapien quis erat ornare rutrum. Mauris nec ornare ante. Pellentesque vel lacus tortor. Duis sit amet justo purus, sed ultricies magna. Maecenas at sodales sem. Vestibulum sollicitudin ligula adipiscing tellus ornare pharetra. Proin non orci a ante rhoncus blandit sed placerat est.</p><p>Vivamus faucibus mattis laoreet. Proin sed libero ut nisl volutpat eleifend placerat vel ante. Morbi quis dui vehicula urna vehicula adipiscing. Aliquam viverra egestas lacus, in condimentum turpis dignissim ac. Cras et est dui, ut mattis elit. Integer scelerisque euismod lacus, sit amet fringilla tellus ultricies ut. Quisque dapibus sagittis augue ac blandit. Pellentesque nec nisl enim, eget congue nibh.</p>']
								],
								commit : function( data )
								{
									data.contents = this.getValue();
								}
							},

						]
					}
				],
				onOk : function()
				{
					var dialog = this,
						data = {},
						link = editor.document.createElement( 'p' );
					this.commitContent( data );

					link.setHtml( data.contents );
					editor.insertElement( link );
				}
			};
		} );
	}
} );