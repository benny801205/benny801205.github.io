
// a hide set

var hide_set =new Set()



function isHide(string_list){
	
	string_list.forEach(function(item){
		if(!hide_set.has(item)){
			return false;
		}
	})
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