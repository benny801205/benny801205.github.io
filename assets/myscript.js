
// all project's attritbutes
const all_attribute =['java',
	'python',
	'csharp',
	'ml',
	'back-end',
	'front-end',
	'mobile-app'
	]


//the attribute we want to display in the begining
const prefer_attribute= [
	"front-end",
	"back-end"
];


var hide_set =new Set(all_attribute)


$('.project').hide()
prefer_attribute.forEach(code => display_prefer_project(code))





function display_prefer_project(code){
	
	let this_label = "#hide-" + code
	$(this_label).hide()
	let target_label = '#display-'+ code
	$(target_label).show()
	
	hide_set.delete(code)
	
	let target_project = '.project-'+ code
	$(target_project).show()
    console.log(target_label)
	
	
}




//check if all labels are hided
function isHide(string_list){
	for (let i =0; i < string_list.length;i++){
		if(!hide_set.has(string_list[i])){
			return false;
		}
	}
	return true;
}



$('.display-label')
  .on('click', function(){
	let code = $(this).attr('value')
	$(this).hide()
	let target_label = '#hide-'+ code
	$(target_label).show()
	let target_project = '.project-'+ code
	
	hide_set.add(code)
	$(target_project).each(function(){
		if (isHide(($(this).attr('value')).split(' '))){
		$(this).hide()
		}});
  })



$('.hide-label')
  .on('click', function(){
	let code = $(this).attr('value')
	$(this).hide()
	let target_label = '#display-'+ code
	$(target_label).show()
	
	hide_set.delete(code)
	
	let target_project = '.project-'+ code
	$(target_project).show()
    console.log(target_label)

  })


console.log('load myscript.js')