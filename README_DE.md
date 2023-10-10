# forEach() und map()

* Arbeite in der Datei `solution.js`, die in diesem Repository bereitgestellt wird.

**1.** Schreibe eine Funktion namens `doubleValues`, die ein Array annimmt und ein neues Array zurückgibt, in dem alle ursprünglichen Werte verdoppelt sind.

Beispiele:
```
doubleValues([1,2,3]) // [2,4,6]
doubleValues([5,1,2,3,10]) // [10,2,4,6,20]
```

**2.** Schreibe eine Funktion namens `onlyEvenValues`, die ein Array annimmt und ein neues Array mit nur den geraden Werten aus dem ursprünglichen Array zurückgibt.

Beispiele:
```
onlyEvenValues([1,2,3]) // [2]
onlyEvenValues([5,1,2,3,10]) // [2,10]
```

**3.** Schreibe eine Funktion namens `showFirstAndLast`, die ein Array mit Strings annimmt und ein neues Array zurückgibt, das nur das erste und letzte Zeichen jedes Strings enthält.

Beispiele:
```
showFirstAndLast(['colt','matt', 'tim', 'udemy']) // ["ct", "mt", "tm", "uy"]
showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']
```

**4.** Schreibe eine Funktion namens `addKeyAndValue`, die ein Array von Objekten, einen Schlüssel und einen Wert akzeptiert und dann das Array, das an die Funktion übergeben wurde, mit dem neuen Schlüssel und Wert zurückgibt, der jedem Objekt hinzugefügt wurde.

Beispiele:
```
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 

// [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
```

**5.** Schreibe eine Funktion namens `vowelCount`, die einen String annimmt und ein Objekt zurückgibt, dessen Schlüssel der Vokal ist und dessen Wert die Anzahl der Vokale in der Zeichenkette ist. Diese Funktion sollte die Groß- und Kleinschreibung nicht berücksichtigen, sodass sowohl Klein- als auch Großbuchstaben gezählt werden.

Beispiele:
```
vowelCount('Elie') // {e:2,i:1};
vowelCount('Tim') // {i:1};
vowelCount('Matt') // {a:1})
vowelCount('hmmm') // {};
vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
```
