def clock_angle(time):
    # Split the time string into hours and minutes
    hours, minutes = map(int, time.split(':'))

    # Calculate the angle made by the hour hand
    hour_angle = (hours % 12) * 30 + minutes * 0.5

    # Calculate the angle made by the minute hand
    minute_angle = minutes * 6

    # Calculate the absolute difference between the two angles
    angle = abs(hour_angle - minute_angle)

    # If the absolute difference is greater than 180 degrees, subtract it from 360 degrees
    if angle > 180:
        angle = 360 - angle

    return angle

print(clock_angle("12:00"))