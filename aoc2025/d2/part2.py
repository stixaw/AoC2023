def is_repeated_pattern(num):
    """Check if a number is made of a sequence repeated at least twice."""
    s = str(num)
    length = len(s)

    # Try all possible pattern lengths from 1 to length//2
    for pattern_len in range(1, length // 2 + 1):
        # Check if the string length is divisible by pattern_len
        if length % pattern_len == 0:
            pattern = s[:pattern_len]

            # Skip patterns with leading zeros
            if pattern[0] == '0':
                continue

            # Check if the entire string is this pattern repeated
            repetitions = length // pattern_len
            if pattern * repetitions == s and repetitions >= 2:
                return True

    return False


def main():
    # Read input from file
    with open('input.txt', 'r') as f:
        input_data = f.read().strip()

    # Parse ranges
    ranges_str = input_data.replace('\n', '')
    ranges = []
    for range_str in ranges_str.split(','):
        start, end = map(int, range_str.split('-'))
        ranges.append((start, end))

    total_sum = 0
    invalid_ids = []

    # Check each range for invalid IDs
    for start, end in ranges:
        for id_num in range(start, end + 1):
            if is_repeated_pattern(id_num):
                invalid_ids.append(id_num)
                total_sum += id_num

    # Print results
    print(f"Found {len(invalid_ids)} invalid IDs")
    for invalid_id in invalid_ids[:10]:  # Show first 10
        print(f"  {invalid_id}")
    if len(invalid_ids) > 10:
        print(f"  ... and {len(invalid_ids) - 10} more")

    print(f"\nTotal sum of invalid IDs: {total_sum}")


if __name__ == "__main__":
    main()
