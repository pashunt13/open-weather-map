export interface CurrentWeather {
  date: string,
  location: string;
  temperature: number;
  description: string;
  windSpeed: number;
  windDegrees: number;
  atmoPressure: number;
  humidity: number;
  ultraviolet: number;
  dewPoint: number;
  visibility: number;
}

export interface DailyWeather {
  date: string;
  temperature: {
    max: number,
    min: number
  };
  description: string;
}