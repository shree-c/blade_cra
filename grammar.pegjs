document = block*

block = white_spaces* open_tag:(tag / style_tag) content:block_content close_tag white_spaces* {
	return {
    	tag : open_tag,
        content,
   }
} / white_spaces

tag = '-' tag:[a-z]+ '-' {
	return {
    	name: tag.join('').trim(),
        value: null
    }
}

style_tag = '-' 's' style_name:[a-z]* '#' style_value:[a-z0-9]* '-' {
	return {
    	name: style_name.join('').trim(),
        value: style_value.join('').trim()
    }
}

close_tag = '-/' [a-z]* '-'

block_content = node*

node = block / string

string = letters:([a-z] / ' ' / '\n' / special_chars / escaped_chars)+ {
//	let string = letters.join('').trim()
  //  if (string.length > 0)
	return letters.join('').trim()
}

special_chars = [@#$%^&*()\]\[\}\+_]

escaped_chars = '\\' char:[\-\\] {
	return char
}

white_spaces = (' ' / '\n')+
