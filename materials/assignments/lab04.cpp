#include <iostream>
#include <string>

class Student {
private:
    std::string name;
    int score = 0;

public:
    Student(std::string studentName, int studentScore) {
        // TODO 1: Set name and score.
    }

    void show() const {
        // TODO 2: Print name and score.
    }
};

int main() {
    Student first("Alex", 85);
    Student second("Sam", 92);
    first.show();
    second.show();
    return 0;
}
