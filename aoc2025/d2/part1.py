def is_repeated_pattern(num):
    """Check if a number is made of a sequence repeated twice."""
    s = str(num)
    length = len(s)

    # Must be even length to be repeated twice
    if length % 2 != 0:
        return False

    half_len = length // 2
    first_half = s[:half_len]
    second_half = s[half_len:]

    # Check if first half equals second half and no leading zeros
    return first_half == second_half and first_half[0] != '0'


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
