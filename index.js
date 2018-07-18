var recipes = {};

function updateObjectWithKeyAndValue(object, key, value) {
  return recipes;
  var new_recipe = recipes[key]
  return Object.assign({}, object, { [key]: value });
  
  
function updateObjectWithKeyAndValue(obj, key, value) {

  return Object.assign({}, recipes, { [key]: value })

const recipe = { eggs: 3 }

updateObjectWithKeyAndValue(recipe, 'chocolate', '1 cup')
// returns `{ eggs: 3, chocolate: '1 cup' }`

recipe // { eggs: 3 }
}

// KEY BIT!! it('returns an object with the orignal key value pairs and the new key value pair', function() {

/*


  describe('updateObjectWithKeyAndValue(object, key, value)', function() {
    it('returns an object with the orignal key value pairs and the new key value pair', function() {
      var obj = { prop: 1 }

      expect(updateObjectWithKeyAndValue(obj, 'prop2', 2)).toMatch({
        prop: 1,
        prop2: 2
      })
    })

    it('it does not modify the original object, but rather returns a clone with the new data', function() {
      var obj = { prop: 1 }

      updateObjectWithKeyAndValue(obj, 'prop2', 2)

      expect(obj['prop2']).toBe(undefined)
    })
  })

*/