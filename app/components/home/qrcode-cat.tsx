"use client"

export function QRCodeCat() {
  const gridSize = 21
  const cellSize = 8
  const svgSize = gridSize * cellSize

  const catShape = (() => {
    const shape: boolean[][] = Array.from({ length: gridSize }, () =>
      Array.from({ length: gridSize }, () => false)
    )

    const fill = (row: number, col: number) => {
      if (row >= 0 && row < gridSize && col >= 0 && col < gridSize) {
        shape[row][col] = true
      }
    }

    const fillRect = (r1: number, c1: number, r2: number, c2: number) => {
      for (let r = r1; r <= r2; r++)
        for (let c = c1; c <= c2; c++) fill(r, c)
    }

    fillRect(5, 7, 7, 13)
    for (let i = 0; i <= 4; i++) {
      fill(4 - i, 7 - i)
      fill(4 - i, 8 - i)
      fill(4 - i, 13 + i)
      fill(4 - i, 12 + i)
    }
    fillRect(8, 3, 18, 17)
    fillRect(19, 5, 20, 15)

    const clearRect = (r1: number, c1: number, r2: number, c2: number) => {
      for (let r = r1; r <= r2; r++)
        for (let c = c1; c <= c2; c++) {
          if (r >= 0 && r < gridSize && c >= 0 && c < gridSize)
            shape[r][c] = false
        }
    }
    clearRect(11, 8, 13, 10)
    clearRect(11, 11, 13, 13)

    fill(10, 9)
    fill(10, 12)
    fill(14, 9)
    fill(14, 10)
    fill(14, 12)
    fill(14, 13)

    return shape
  })()

  const seed = 42
  const rand = (r: number, c: number) => {
    const x = Math.sin(seed + r * 127.1 + c * 311.7) * 43758.5453
    return x - Math.floor(x)
  }

  const cells: { x: number; y: number; isEye: boolean }[] = []
  const isFinderPattern = (r: number, c: number) => {
    return (
      (r <= 2 && c <= 2) ||
      (r <= 2 && c >= gridSize - 3) ||
      (r >= gridSize - 3 && c <= 2)
    )
  }

  for (let row = 0; row < gridSize; row++) {
    for (let col = 0; col < gridSize; col++) {
      if (catShape[row][col]) {
        const fillProb = isFinderPattern(row, col) ? 0.85 : 0.55
        if (rand(row, col) < fillProb) {
          cells.push({
            x: col * cellSize,
            y: row * cellSize,
            isEye: isFinderPattern(row, col),
          })
        }
      }
    }
  }

  return (
    <div className="relative">
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={`0 0 ${svgSize} ${svgSize}`}
        className="drop-shadow-lg"
      >
        <rect
          x={-2}
          y={-2}
          width={svgSize + 4}
          height={svgSize + 4}
          rx="4"
          className="fill-white dark:fill-slate-800"
        />
        {cells.map((cell, i) => (
          <rect
            key={i}
            x={cell.x}
            y={cell.y}
            width={cellSize - 1}
            height={cellSize - 1}
            rx={cell.isEye ? 0 : 1}
            className={cell.isEye ? "fill-blue-700 dark:fill-blue-400" : "fill-blue-500 dark:fill-blue-300"}
          />
        ))}
      </svg>
    </div>
  )
}
