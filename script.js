const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const workoutContainer = document.getElementById('workout-container');

const workouts = [
    {
        name: 'Bicep Curl',
        videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
        videoThumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg',
        description: 'Exercise to train your biceps'
    },
    {
        name: 'Tricep Dip',
        videoUrl: 'https://www.youtube.com/watch?v=4Qw4w9WgXcQ',
        videoThumbnail: 'https://i.ytimg.com/vi/4Qw4w9WgXcQ/mqdefault.jpg',
        description: 'Exercise to train your triceps'
    },
    {
        name: 'Squat',
        videoUrl: 'https://www.youtube.com/watch?v=7HmBTdLT0',
        videoThumbnail: 'https://i.ytimg.com/vi/7HmBTdLT0/mqdefault.jpg',
        description: 'Exercise to train your legs'
    },
    {
        name: 'Deadlift',
        videoUrl: 'https://www.youtube.com/watch?v=9Qw4w9WgXcQ',
        videoThumbnail: 'https://i.ytimg.com/vi/9Qw4w9WgXcQ/mqdefault.jpg',
        description: 'Exercise to train your back and legs'
    },
    {
        name: 'Bench Press',
        videoUrl: 'https://www.youtube.com/watch?v=rw_HmBTdLT0',
        videoThumbnail: 'https://i.ytimg.com/vi/rw_HmBTdLT0/mqdefault.jpg',
        description: 'Exercise to train your chest'
    },
    {
        name: 'Pull-up',
        videoUrl: 'https://www.youtube.com/watch?v=HmBTdLT0rw',
        videoThumbnail: 'https://i.ytimg.com/vi/HmBTdLT0rw/mqdefault.jpg',
        description: 'Exercise to train your back'
    },
    {
        name: 'Leg Press',
        videoUrl: 'https://www.youtube.com