package CucumberDemo;

public class Belly {
       private int cukes;
       private int hours;
       private boolean growl=false;

        public void eat(int cukes) {
                      }

        public void setCukes(int cukes) {
                this.cukes = cukes;
        }

        public int getCukes() {
                return cukes;
        }

        public void setHours(int hours) {
                this.hours = hours;
        }

        public int getHours()
        {
                return hours;
        }

        public boolean isGrowl(int hours) {
                if (hours > 41 && hours ==1)
                {
                        return true;
                }
                return false;
        }
}