function drinkAbout( age ) {
	var result = "";

	if (age < 14) return 'drink toddy'
		
		else if (age < 18) return 'drink coke'
			
			else if (age < 21) {
				result = 'drink beer'
			}
			else if  (age >=21) {
				result = 'drink whisky'
			}

			return result;

		}