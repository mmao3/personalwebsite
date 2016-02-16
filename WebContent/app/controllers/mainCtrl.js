(function() {
	'use strict';
	var controllerId = 'mainCtrl';
	angular.module('app').controller(
			controllerId,
			[ '$scope', '$location', '$http', '$filter', 'Util',
					'$routeParams', '$rootScope', mainCtrl ]);
	function mainCtrl($scope, $location, $http, $filter, Util, $routeParams,
			$rootScope) {
		var vm = this;
		$scope.home1 = true;
		$scope.send = {};
		$scope.langItems = [ {
			name : '中文版',
			code : 'en'
		}, {
			name : 'English',
			code : 'zh'
		} ];
		$scope.options = [ {
			name : '刷题',
			value : 'shuati'
		}, {
			name : '随笔',
			value : 'suibi'
		} ];
		$scope.options1 = [ {
			name : '私密',
			value : 'true'
		}, {
			name : '公开',
			value : 'false'
		} ];
		$scope.them = [ {
			name : '主题1',
			value : 'false'
		}, {
			name : '主题2',
			value : 'true'
		} ];

		$scope.options2 = [ {
			name : 'Georgia',
			value : 'Georgia, serif'
		}, {
			name : 'Palatino Linotype',
			value : '"Palatino Linotype", "Book Antiqua", Palatino, serif'
		}, {
			name : 'Helvetica Neue',
			value : '"Helvetica Neue", Helvetica, Arial, sans-serif'
		}, {
			name : 'Times New Roman',
			value : '"Times New Roman", Times, serif'
		}, {
			name : 'Arial',
			value : 'Arial, Helvetica, sans-serif'
		}, {
			name : 'Arial Black',
			value : '"Arial Black", Gadget, sans-serif'
		}, {
			name : 'Comic Sans MS',
			value : '"Comic Sans MS", cursive, sans-serif'
		}, {
			name : 'Impact',
			value : 'Impact, Charcoal, sans-serif'
		}, {
			name : 'Lucida Sans Unicode',
			value : '"Lucida Sans Unicode", "Lucida Grande", sans-serif'
		}, {
			name : 'Tahoma',
			value : 'Tahoma, Geneva, sans-serif'
		}, {
			name : 'Trebuchet MS',
			value : '"Trebuchet MS", Helvetica, sans-serif'
		}, {
			name : 'Verdana',
			value : 'Verdana, Geneva, sans-serif'
		}, {
			name : 'Courier New',
			value : '"Courier New", Courier, monospace'
		}, {
			name : 'Lucida Console',
			value : '"Lucida Console", Monaco, monospace'
		} ];
		$scope.options3 = [ {
			name : '10px',
			value : '10px'
		}, {
			name : '12px',
			value : '12px'
		}, {
			name : '14px',
			value : '14px'
		}, {
			name : '16px',
			value : '16px'
		}, {
			name : '18px',
			value : '18px'
		}, {
			name : '24px',
			value : '24px'
		}, {
			name : '36px',
			value : '36px'
		} ];
		$scope.changeColor = function(element) {
			$scope.home1 = false;
			$scope.cv1 = false;
			$scope.projects1 = false;
			$scope.contacts1 = false;
			$scope.life1 = false;
			$scope[element] = true;
		}
		$scope.makeBold = function() {
			$scope.bold = !$scope.bold;

		}
		$scope.makeItalic = function() {
			$scope.italic = !$scope.italic;
		}
		$scope.makeUnderline = function() {
			$scope.underline = !$scope.underline;
		}

		$scope.changeLanguage = function(code) {
			if (code === "en") {
				$scope.selected = $scope.langItems[1];
				localStorage.setItem("language", 'zh');
			} else {
				$scope.selected = $scope.langItems[0];
				localStorage.setItem("language", 'en');
				if($location.path().startsWith('/life')){
					$location.path("/");
				}
				
				
			}
			// console.log(localStorage.getItem("language"));

		}
		$scope.getItem = function() {
			return localStorage.getItem("language");
		}
		function setlangusge(lang) {
			var myEl = angular.element(document.getElementsByTagName("html"));
			myEl.attr('lang', lang);
		}

		$scope
				.$watch(
						'selected',
						function(item) {
							if (item) {
								setlangusge($scope.selected.code);
								$scope.home = window.Language.STRINGS[$scope.selected.code]['home'];
								$scope.cv = window.Language.STRINGS[$scope.selected.code]['cv'];
								$scope.projects = window.Language.STRINGS[$scope.selected.code]['projects'];
								$scope.contacts = window.Language.STRINGS[$scope.selected.code]['contacts'];
								$scope.hello = window.Language.STRINGS[$scope.selected.code]['hello'];
								$scope.home_avail = window.Language.STRINGS[$scope.selected.code]['home_avail'];
								$scope.home_self = window.Language.STRINGS[$scope.selected.code]['home_self'];
								$scope.home_af = window.Language.STRINGS[$scope.selected.code]['home_af'];
								$scope.home_wd = window.Language.STRINGS[$scope.selected.code]['home_wd'];
								$scope.home_jd = window.Language.STRINGS[$scope.selected.code]['home_jd'];
								$scope.home_sd = window.Language.STRINGS[$scope.selected.code]['home_sd'];
								$scope.home_fs = window.Language.STRINGS[$scope.selected.code]['home_fs'];
								$scope.home_ws = window.Language.STRINGS[$scope.selected.code]['home_ws'];
								$scope.home_dh = window.Language.STRINGS[$scope.selected.code]['home_dh'];
								$scope.home_yx = window.Language.STRINGS[$scope.selected.code]['home_yx'];
								$scope.home_sj = window.Language.STRINGS[$scope.selected.code]['home_sj'];
								$scope.home_cv = window.Language.STRINGS[$scope.selected.code]['home_cv'];
								$scope.home_st = window.Language.STRINGS[$scope.selected.code]['home_st'];
								$scope.home_stc = window.Language.STRINGS[$scope.selected.code]['home_stc'];
								$scope.home_qt = window.Language.STRINGS[$scope.selected.code]['home_qt'];
								$scope.home_qtc = window.Language.STRINGS[$scope.selected.code]['home_qtc'];
								$scope.home_rp = window.Language.STRINGS[$scope.selected.code]['home_rp'];
								$scope.home_rpc = window.Language.STRINGS[$scope.selected.code]['home_rpc'];
								$scope.contacts_con = window.Language.STRINGS[$scope.selected.code]['contacts_con'];
								$scope.contacts_email = window.Language.STRINGS[$scope.selected.code]['contacts_email'];
								$scope.contacts_name = window.Language.STRINGS[$scope.selected.code]['contacts_name'];
								$scope.contacts_send = window.Language.STRINGS[$scope.selected.code]['contacts_send'];
								$scope.contacts_subject = window.Language.STRINGS[$scope.selected.code]['contacts_subject'];
								$scope.contacts_message = window.Language.STRINGS[$scope.selected.code]['contacts_message'];
								$scope.contacts_look = window.Language.STRINGS[$scope.selected.code]['contacts_look'];
								$scope.project_break = window.Language.STRINGS[$scope.selected.code]['project_break'];
								$scope.project_bank = window.Language.STRINGS[$scope.selected.code]['project_bank'];
								$scope.project_pw = window.Language.STRINGS[$scope.selected.code]['project_pw'];
								$scope.project_demo = window.Language.STRINGS[$scope.selected.code]['project_demo'];
								$scope.project_code = window.Language.STRINGS[$scope.selected.code]['project_code'];
								$scope.download = window.Language.STRINGS[$scope.selected.code]['download'];

							}

						});
		$scope.images = [ {
			image : 'images/me.JPG',
			id : 1
		}, {
			image : 'images/honour.jpeg',
			id : 2
		}, {
			image : 'images/honour2.JPG',
			id : 3
		}

		];
		$scope.goToCV = function() {
			$location.path("/cv");
		}
		$scope.verifyEmail = function() {
			if (!Util.validateEmail($scope.send.email)) {
				$scope.emailValid = false;
				$scope.emailClass = "error";
			} else {
				$scope.emailValid = true;
				$scope.emailClass = "ok";
			}
		}
		$scope.verifyName = function() {
			if (!Util.validateLength($scope.send.name)) {
				$scope.nameValid = false;
				$scope.nameClass = "error";
			} else {
				$scope.nameValid = true;
				$scope.nameClass = "ok";
			}
		}
		$scope.verifySubject = function() {
			if ($scope.send.subject == null
					|| $scope.send.subject.trim().length < 1) {
				$scope.subjectValid = false;
				$scope.subjectClass = "error";
			} else {
				$scope.subjectValid = true;
				$scope.subjectClass = "ok";
			}
		}
		$scope.verifyMessage = function() {
			if ($scope.send.message == null
					|| $scope.send.message.trim().length < 1) {
				$scope.messageValid = false;
				$scope.messageClass = "error";
			} else {
				$scope.messageValid = true;
				$scope.messageClass = "ok";
			}
		}
		$scope.sendMail = function() {
			if (!$scope.isSubmited && $scope.nameValid && $scope.subjectValid
					&& $scope.messageValid && $scope.emailValid) {
				$scope.isSubmited = true;
				$scope.send.message = $scope.send.message.trim();
				$scope.send.subject = $scope.send.subject.trim();
				$scope.send.name = $scope.send.name.trim();
				$scope.send.email = $scope.send.email.trim();
				$http({
					method : 'POST',
					url : 'send',
					data : $.param({
						fkey : JSON.stringify($scope.send)
					}),
					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded'
					}
				})
						.success(
								function() {
									$scope.isSubmited = false;
									$scope.nameValid = false;
									$scope.subjectValid = false;
									$scope.messageValid = false;
									$scope.emailValid = false;
									window.location.href = "http://localhost:8080/personalWebsite/confirmation.html";

								});

			}
		}
		$scope.downloadresume = function() {
			$http({
				method : 'get',
				url : 'download',
				headers : {
					'Content-type' : 'application/pdf',
				},
				responseType : 'arraybuffer'

			}).success(function(data) {
				console.log("mao");
				var blob = new Blob([ data ], {
					type : "application/pdf;charset=utf-8"
				});
				saveAs(blob, "Resume_MAOMAO.pdf");

			});
		};

		(function() {
			$("#mycolor").colorpicker({
				color : "#000"
			});
			$(".addDiary").bind(
					'mouseup',
					function(e) {
						var selection;

						if (window.getSelection) {
							selection = window.getSelection();
						} else if (document.selection) {
							selection = document.selection.createRange();
						}
						var range = selection.getRangeAt(0);
						var span = document.createElement("span");
						span.style.color = $("#mycolor").colorpicker('val');
						span.style.fontFamily = angular.element($("#newDiary"))
								.scope().diary.fontFamily.value;
						span.style.fontSize = angular.element($("#newDiary"))
								.scope().diary.fontSize.value;
						if (angular.element($("#newDiary")).scope().italic) {
							span.style.fontStyle = "italic";
						} else {
							span.style.fontStyle = "normal";
						}
						if (angular.element($("#newDiary")).scope().bold) {
							span.style.fontWeight = "bold";
						} else {
							span.style.fontWeight = "normal";
						}
						if (angular.element($("#newDiary")).scope().underline) {
							span.style.textDecoration = "underline";
						} else {
							span.style.textDecoration = "none";
						}

						var t = document.createTextNode(range.toString());
						span.appendChild(t);
						range.extractContents();
						range.insertNode(span);

					});
			$http
					.get(
							"diaries",
							{
								cache : false,
								transformResponse : function(data,
										headersGetter) {
									try {
										console.log(data);
										var jsonObject = JSON.parse(data);
										return jsonObject;
									} catch (e) {
										console
												.log("did not receive a valid Json: "
														+ e)
									}
									return {};
								}
							})
					.success(
							function(data) {
								console.log(data);
								$scope.diaries = data;
								$scope.diaries.sort(function(a, b) {
									return new Date(b.date) - new Date(a.date);
								});
								$scope.filteredDiaries = $scope.diaries;
								if ($location.path().startsWith('/diaries')) {
									var id = $routeParams.id;
									$scope.currentDiary = $scope.diaries
											.filter(function(el) {
												return el.id === id
											})[0];
									$(".diaryList_zw").html(
											$scope.currentDiary.content
													.replace(/&quot;/g, '\"'));

									if (!$scope.currentDiary) {
										$location.path("/life");
									} else {
										$scope.isRated=localStorage.getItem("isRated"+id);
										$http(
												{
													method : 'post',
													url : 'comment',
													data : $
															.param({
																fkey : JSON
																		.stringify({
																			id : $routeParams.id,
																		})
															}),
													headers : {
														'Content-Type' : 'application/x-www-form-urlencoded'
													}
												})
												.success(
														function(d, status,
																headers, config) {
															$scope.comments = d;
															$scope.comments
																	.sort(function(
																			a,
																			b) {
																		return new Date(
																				b.date)
																				- new Date(
																						a.date);
																	});

														});
										$http(
												{
													method : 'post',
													url : 'rating',
													data : $
															.param({
																fkey : JSON
																		.stringify({
																			id : $routeParams.id,
																			isGetting : true
																		})
															}),
													headers : {
														'Content-Type' : 'application/x-www-form-urlencoded'
													}
												}).success(
												function(d, status, headers,
														config) {
													console.log(d);
													$scope.rate = d[0].times;

												});

									}

								}

							});
			$http.get("https://api.ipify.org?format=json").success(
					function(data) {

						console.log(data.ip);
					});

		})();

		$scope.loadData = function(data) {
			if (data === "all") {
				$scope.filteredDiaries = $scope.diaries;

			} else {
				$scope.filteredDiaries = $filter('filter')
						($scope.diaries, data);
			}

			$scope.all = false;
			$scope.suibi = false;
			$scope.shuati = false;
			$scope[data] = true;
		}
		$scope.hoverItem = function(status, data) {
			if (status) {
				$scope[data + '1'] = true;
			} else {
				$scope[data + '1'] = false;
			}
			if ($scope[data]) {
				$scope[data + '1'] = false;
			}

		}
		$scope.addComments = function() {
			if ($(".addComment").text().trim()) {
				$http
						.get("https://api.ipify.org?format=json")
						.success(
								function(data) {
									var body = encodeURIComponent(($(
											".addComment").text().trim()));
									var comment = {
										id : $routeParams.id,
										ip : data.ip,
										comment : body,
										date : (new Date()).toUTCString()

									}
									$http(
											{
												method : 'POST',
												url : 'addComment',
												data : $.param({
													fkey : JSON
															.stringify(comment)
												}),
												headers : {
													'Content-Type' : 'application/x-www-form-urlencoded'
												}
											}).success(
											function() {
												$scope.comments.unshift({
													id : $routeParams.id,
													ip : data.ip,
													comment : $(".addComment")
															.text().trim(),
													date : comment.date,

												});
												$(".addComment").text("");

											});

								})
			}

		}
		$scope.addDiary = function() {

			var diary = {
				id : Util.getRandom(32),
				show : $scope.diary.show.value,
				category : $scope.diary.category.value,
				date : (new Date()).toUTCString(),
				title : encodeURIComponent($scope.diary.title.trim()),
				content : encodeURIComponent($(".addDiary").html().replace(
						/\n/g, "\\\\n").replace(/\"/g, "\&quot;")),
				code : Util.getRandom(32),
				them2 : $scope.diary.them.value,
			}
			$http({
				method : 'POST',
				url : 'diaries',
				data : $.param({
					fkey : JSON.stringify(diary)
				}),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).success(function() {

				alert("sucess");

			});

		}
		$scope.goToAllDiaries = function() {

			$location.path("/life");
		}
		$scope.openDiary = function(diary) {
			if (diary.show === "false") {
				$location.path("/diaries/" + diary.id);
			} else {
				var password = prompt("Please enter access code : ");
				$http({
					method : 'post',
					url : 'AccessCode',
					data : $.param({
						fkey : JSON.stringify({
							id : diary.id,
						})
					}),
					headers : {
						'Content-Type' : 'application/x-www-form-urlencoded'
					}
				}).success(function(d, status, headers, config) {
					if (password && password.trim() === d[0].code) {
						$location.path("/diaries/" + diary.id);
					}

				});
			}

		}
		$scope.setRating = function() {
			var id = $routeParams.id;
			if(localStorage.getItem("isRated"+id)==="true"){
				return;
			}else{
				localStorage.setItem("isRated"+id,'true');
				$scope.isRated="true";
			}
			$http({
				method : 'post',
				url : 'rating',
				data : $.param({
					fkey : JSON.stringify({
						id : $routeParams.id,
					})
				}),
				headers : {
					'Content-Type' : 'application/x-www-form-urlencoded'
				}
			}).success(function() {
				$scope.rate = 1 + parseInt($scope.rate);

			});
		}
		$scope.getYear = function(date) {
			return new Date(date).getFullYear() + "-"
					+ (new Date(date).getMonth() + 1) + "-"
					+ new Date(date).getDate();
		}
		$scope.getHour = function(date) {
			return new Date(date).getHours()
					+ " : "
					+ (new Date(date).getMinutes() < 10 ? 0 + ""
							+ new Date(date).getMinutes() : new Date(date)
							.getMinutes());
		}
	}

}());
