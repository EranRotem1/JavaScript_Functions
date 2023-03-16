console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

function printOdds(count)
{
    for (i = 0; i <= count; i++)
    {
        if (i % 2 != 0)
        {
            console.log(i);
        }
        else
        {
            continue;
        }
    }
}

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

function checkAge(userName, age) 
{
    aboveSixteen = `Congrats ${userName}, you can drive!`;
    belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;
    if (age >= 16) 
    {
        console.log(aboveSixteen);
    }
    else 
    {
        console.log(belowSixteen);
    }
}

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

function whichQuadrant(x, y) 
{
    if (x == 0 && y == 0) 
    {
        console.log(`(${x},${y}) is the center point`);
    }
    else if (x == 0) 
    {
        console.log(`(${x},${y}) is on the x axis`);
    }
    else if (y == 0) 
    {
        console.log(`(${x},${y}) is on the y axis`);
    }
    else if (x > 0 && y > 0) 
    {
        console.log(`(${x},${y}) is in Quadrant 1`);
    }
    else if (x < 0 && y > 0) 
    {
        console.log(`(${x},${y}) is in Quadrant 2`);
    }
    else if (x < 0 && y < 0) 
    {
        console.log(`(${x},${y}) is in Quadrant 3`);
    }
    else if (x > 0 && y < 0) 
    {
        console.log(`(${x},${y}) is in Quadrant 4`);
    }                
}

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

function typeOfTriangle(side1, side2, side3)
{
    if (side1 + side2 <= side3 ||
        side1 + side3 <= side2 ||
        side3 + side2 <= side1)
        {
            console.log(`Sides ${side1}, ${side2}, ${side3} make an Invalid Triangle`);
        }
    else
    {
        if (side1 == side2 && side2 == side3)
        {
            console.log(`Sides ${side1}, ${side2}, ${side3} make an Equalateral Triangle`);
        }
        else if (side1 != side2 && side2 != side3 && side3 != side1)
        {
            console.log(`Sides ${side1}, ${side2}, ${side3} make an Scalene Triangle`);
        }
        else 
        {
            console.log(`Sides ${side1}, ${side2}, ${side3} make an Isosceles Triangle`);
        }
    }
}

// Exercise 5 Section
console.log("EXERCISE 5:\n==========\n");

function dataPlanStatus(planLimit, day, usage)
{
    let daysLeft = 30 - day;
    let dataLeft = planLimit - usage;
    let remainingDailyUsage = dataLeft / daysLeft;
    let recDailyUsage = planLimit / 30;
    let actualDailyUsage = usage / day;
    let predictedUsageDifference = planLimit - (actualDailyUsage * 30);
    let planStatus;
    if (actualDailyUsage > recDailyUsage)
    {
        planStatus = "EXCEEDING";
        console.log(`${day} days used, ${daysLeft} days remaining \n
        Average daily usage: ${actualDailyUsage} GB/day\n
        You are ${planStatus} your recommended daily usage of: ${recDailyUsage}\n
        continuing this usage will exceed your plan by ${-predictedUsageDifference} GB\n
        to stay below your plan, use no more than ${remainingDailyUsage} GB a day. `)
    }
    else if (actualDailyUsage < recDailyUsage)
    {
        planStatus = "BELOW";
        console.log(`${day} days used, ${daysLeft} days remaining \n
        Average daily usage: ${actualDailyUsage} GB/day\n
        You are ${planStatus} your recommended daily usage of: ${recDailyUsage}\n
        continuing this usage will result in using ${predictedUsageDifference} GB less than your plan, data does not roll over\n
        to meet your plan, use ${remainingDailyUsage} GB a day. `)
    }
    else if (actualDailyUsage = recDailyUsage)
    {
        planStatus = "RIGHT AT";
        console.log(`${day} days used, ${daysLeft} days remaining \n
        Average daily usage: ${actualDailyUsage} GB/day\n
        You are ${planStatus} your recommended daily usage of: ${recDailyUsage}`);
    }
}