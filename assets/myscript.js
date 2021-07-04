
$('.display-label')
  .on('click', function(){
	let code = $(this).attr('value')
	$(this).hide()
	let target_label = '#hide-'+ code
	$(target_label).show()
	let target_project = '.project-'+ code
	$(target_project).hide()
    console.log(target_label)

  })



$('.hide-label')
  .on('click', function(){
	let code = $(this).attr('value')
	$(this).hide()
	let target_label = '#display-'+ code
	$(target_label).show()
	let target_project = '.project-'+ code
	$(target_project).show()
    console.log(target_label)

  })


console.log('load myscript.js')