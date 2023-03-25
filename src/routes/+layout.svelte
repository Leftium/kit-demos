<h1>Start Layout</h1>

<pre>
    Repo steps:

    1. Navigate to slugA (link)
    2. Navigate to Home (link)
    3. Navigate to slugB (link)
    4. Click "Increment via method call"
    5. Click "Increment via method call"
    6. Click "Increment via property access"
    7. Click "Increment via property access"

    Expected:
    4. count: 1
    5. count: 2
    6. count: 3
    7. count: 4

    Actual:
    4. count: 2
    5. count: 4
    6. count: 2
    6. count: 4

    (Inspect dev console for more info)

</pre>

<slot />

<h1>End Layout</h1>
