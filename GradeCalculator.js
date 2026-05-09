function getGrade(score) {
    if (score >= 80) return { grade: 'A', remark: 'Excellent' };
    else if (score >= 70) return { grade: 'B', remark: 'Good' };
    else if (score >= 60) return { grade: 'C', remark: 'Average' };
    else if (score >= 50) return { grade: 'D', remark: 'Below Average' };
    return { grade: 'F', remark: 'Fail' };
}

function generateReport(name, scores) {
    console.log ('=== GRADE REPORT FOR ' + name.toUpperCase() + ' ===');

    let total = 0;

    scores.forEach((score, index) => {
        const result = getGrade(score);
        console.log(`Subject ${index + 1}: Score = ${score}/100 - ${result.grade} (${result.remark})`);
        total += score;
    });

    const average = total / scores.length;
    const finalResult = getGrade(average);

    console.log("=========================================");
    console.log(`Average: ${average.toFixed(1)}/100`);
    console.log(`Final Grade: ${finalResult.grade} (${finalResult.remark})`);
}


// TESTING THE GRADE CALCULATOR.

generateReport("Blessing Okafor", [85, 78, 92, 67, 88]);
generateReport("Iyanuoluwa", [55, 62, 48, 70, 59]);